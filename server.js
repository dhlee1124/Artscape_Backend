require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const DB_PORT = 3306;

app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml'); // Swagger 문서 경로

// Swagger UI 라우트 추가
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 데이터베이스 연결 테스트
db.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 오류:', err);
    return;
  }
  console.log('데이터베이스에 연결되었습니다.');
});

// 프로필 업로드
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
});
const upload = multer({ storage });

//signup api
app.post('/signup', upload.single('profile_picture'), async (req, res) => {
  const { name, username, password, confirmPassword } = req.body;

  if (!name || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: '모든 필드를 입력하세요.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

  const user = { name, username, password: hashedPassword, profile_picture: profilePicture };

  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: '회원가입 실패' });
    }
    res.status(201).json({ message: '회원가입 성공' });
  });
});

//login api
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '아이디와 비밀번호를 입력하세요.' });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: '서버 오류' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    res.status(200).json({ message: '로그인 성공', user: { id: user.id, name: user.name } });
  });
});

app.listen(PORT, () => {
  console.log(`서버가 localhost:3000에서 실행 중입니다.`); //서버 번호
});

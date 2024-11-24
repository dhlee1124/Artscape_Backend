const express = require('express');
const router = express.Router();
const db = require('../db');


// 회원가입
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );
        res.status(201).json({ message: '회원가입 성공!', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: '회원가입 실패. 이미 존재하는 사용자일 수 있습니다.' });
    }
});

// 로그인
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0]; 

        if (!user) {
            console.error('사용자를 찾을 수 없습니다.'); // 로그 추가
            return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
        }

        if (password !== user.password) {
            console.error('비밀번호가 올바르지 않습니다.'); // 로그 추가
            return res.status(401).json({ error: '비밀번호가 올바르지 않습니다.' });
        }


        res.status(200).json({ message: '로그인 성공!' });
    } catch (error) {
        console.error('로그인 오류:', error); // 오류 로그 출력
        res.status(500).json({ error: '로그인 실패.' });
    }
});

module.exports = router;


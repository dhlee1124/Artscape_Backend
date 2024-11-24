const express = require('express');
const router = express.Router();
const db = require('../db');

const authMiddleware = require('../authMiddleaware');

// 새로운 매칭 정보 생성 (userId를 요청 바디에서 받아 생성)
router.post('/create_matching_data', async (req, res) => {
    const userId = req.body.userId; // 요청 바디에서 userId 추출

    // userId가 유효하지 않은 경우 처리
    if (!userId) {
        return res.status(400).json({ error: 'userId is required and cannot be null' });
    }

    try {
        const [results] = await db.query(
            "INSERT INTO exhibitions (user_id) VALUES (?)",
            [userId]
        );
        res.json({ id: results.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred', details: error.message });
    }
});

// entrance_fee 저장
router.post('/entrance_fee', async (req, res) => {
    const { id, entrance_fee } = req.body;

    try {
        await db.query(
            "UPDATE exhibitions SET entrance_fee = ? WHERE id = ?",
            [entrance_fee, id]
        );
        res.status(200).json({ message: 'Entrance fee updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred' });
    }
});

// entrance_fee 불러오기
router.get('/entrance_fee/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await db.query(
            "SELECT entrance_fee FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred' });
    }
});

// scale 저장
router.post('/scale', async (req, res) => {
    const { id, scale } = req.body;

    try {
        await db.query(
            "UPDATE exhibitions SET scale = ? WHERE id = ?",
            [scale, id]
        );
        res.status(200).json({ message: 'Scale updated successfully' });
    } catch (error) {
        console.error('Database 에러:', error);
        res.status(500).json({ error: 'Database error occurred' });
    }
});

// scale 불러오기
router.get('/scale/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await db.query(
            "SELECT scale FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred' });
    }
});

// min_people 저장
router.post('/min_people', async (req, res) => {
    const { id, min_people } = req.body;

    try {
        await db.query(
            "UPDATE exhibitions SET min_people = ? WHERE id = ?",
            [min_people, id]
        );
        res.status(200).json({ message: 'Min people updated successfully' });
    } catch (error) {
        console.error('Database 에러:', error);
        res.status(500).json({ error: 'Database error occurred' });
    }
});

// min_people 불러오기
router.get('/min_people/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await db.query(
            "SELECT min_people FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred' });
    }
});


// max_people 저장
router.post('/max_people', async (req, res) => {
    const { id, max_people } = req.body;

    try {
        await db.query(
            "UPDATE exhibitions SET max_people = ? WHERE id = ?",
            [max_people, id]
        );
        res.status(200).json({ message: 'Max people updated successfully' });
    } catch (error) {
        console.error('Database 에러:', error);
        res.status(500).json({ error: 'Database error occurred' });
    }
});

// max_people 불러오기
router.get('/max_people/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await db.query(
            "SELECT max_people FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occurred' });
    }
});

// Region1 저장
router.post('/region1', async (req, res) => {
    const { id, region1 } = req.body;
    try {
        await db.query(
            "UPDATE exhibitions SET region1 = ? WHERE id = ?",
            [region1, id]
        );
        res.status(200).json({ message: 'Region1 updated successfully' });
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// Region1 불러오기
router.get('/region1/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query(
            "SELECT region1 FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// Region2 저장
router.post('/region2', async (req, res) => {
    const { id, region2 } = req.body;
    try {
        await db.query(
            "UPDATE exhibitions SET region2 = ? WHERE id = ?",
            [region2, id]
        );
        res.status(200).json({ message: 'Region2 updated successfully' });
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// Region2 불러오기
router.get('/region2/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query(
            "SELECT region2 FROM exhibitions WHERE id = ?",
            [id]
        );
        res.json(results[0]);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// 작품 형태 artwork style 저장 (여러 개 입력받기)
router.post('/artwork_style', async (req, res) => {
    const { id, artwork_styles } = req.body; // artwork_styles should be an array
    try {
        await db.query(
            "UPDATE exhibitions SET artwork_style = ? WHERE id = ?",
            [JSON.stringify(artwork_styles), id]
        );
        res.status(200).json({ message: 'Artwork styles updated successfully' });
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// artwork style 불러오기
router.get('/artwork_style/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query(
            "SELECT artwork_style FROM exhibitions WHERE id = ?",
            [id]
        );
        const artworkStyles = JSON.parse(results[0].artwork_style);
        res.json(artworkStyles);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// 내 스타일 저장 (여러 개 입력받기)
router.post('/my_style', async (req, res) => {
    const { id, my_styles } = req.body; // my_styles should be an array
    try {
        await db.query(
            "UPDATE exhibitions SET my_style = ? WHERE id = ?",
            [JSON.stringify(my_styles), id]
        );
        res.status(200).json({ message: 'My styles updated successfully' });
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// my_style 불러오기
router.get('/my_style/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query(
            "SELECT my_style FROM exhibitions WHERE id = ?",
            [id]
        );
        const myStyles = JSON.parse(results[0].my_style);
        res.json(myStyles);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// 상대 스타일 저장 (여러 개 입력받기)
router.post('/partner_style', async (req, res) => {
    const { id, partner_styles } = req.body; // partner_styles should be an array
    try {
        await db.query(
            "UPDATE exhibitions SET partner_style = ? WHERE id = ?",
            [JSON.stringify(partner_styles), id]
        );
        res.status(200).json({ message: 'Partner styles updated successfully' });
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

// partner_style 불러오기
router.get('/partner_style/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query(
            "SELECT partner_style FROM exhibitions WHERE id = ?",
            [id]
        );
        const partnerStyles = JSON.parse(results[0].partner_style);
        res.json(partnerStyles);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});


module.exports = router;

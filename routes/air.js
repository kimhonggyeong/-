const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = 'vkfTQ2CfMatfbceLMjhvFoDPxBuq4IjJ95hjlaT7bA9jEqYob7XEgBKfxj/NQnOaXCeoeVDKzDyVsoNGQ/hsDg==';
const apiUrl = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty';

router.get('/air', async (req, res) => {
    const stationName = req.query.stationName || '종로구'; // 기본값 설정
    try {
        const response = await axios.get(apiUrl, {
            params: {
                serviceKey: apiKey,
                returnType: 'json',
                numOfRows: 5,
                pageNo: 1,
                stationName: stationName,
                dataTerm: 'DAILY',
                ver: '1.4'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

module.exports = router;

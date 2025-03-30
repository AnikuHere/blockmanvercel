const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const path = require('path');

const accountJson = require(path.resolve(__dirname, '../account/account.json'));
const detailsJson = require('../account/details');

const userSchema = new mongoose.Schema({
    password: String,
    nickname: String,
    userId: String,
    birthday: String,
    introduction: String,
    diamonds: Number,
    gold: Number,
    sex: Number,
    picUrl: String,
    vip: Number
});

const User = mongoose.model('User', userSchema);

router.post('/api/v1/app/set-password', async (req, res) => {
    const { password } = req.body;
    const userId = req.headers.userid;

    if (!userId) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId });

    if (!user) {
        return res.status(404).json({ code: 108, message: 'User not found', data: null });
    }

    user.password = password;

    await user.save();

    return res.status(200).json({ code: 1, message: 'SUCCESS', data: null });
});

router.post('/api/v1/app/renew', async (req, res) => {
    const userId = (Math.floor(Math.random() * 100000) + 600000).toString();

    const user = new User({ userId });

    await user.save();

    res.status(200).json({ code: 1, message: 'SUCCESS', data: { userId, accessToken: 'Not implemented' } });
});

router.post('/api/v1/user/register', async (req, res) => {
    const { nickName, sex } = req.body;
    const userId = req.headers.userid;

    if (!nickName) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId: userId });

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const existingUser = await User.findOne({ nickname: nickName });
    if (existingUser) {
        return res.status(400).json({ code: 7, message: 'Nickname already exists, choose another nickname', data: null });
    }

    user.nickname = nickName;
    user.sex = sex;
    user.picUrl = '';
    user.birthday = '';
    user.diamonds = 0;
    user.introduction = '';
    user.gold = 0;
    user.vip = 0;

    await user.save();

    const responseData = { 
        userId: userId,
        nickName: user.nickname,
        sex: user.sex, 
        picUrl: user.picUrl, 
        details: user.introduction,
        birthday: user.birthday,
        vip: user.vip, 
        expire: 0
    };

    res.status(200).json({ 
        code: 1, 
        message: 'SUCCESS', 
        data: responseData 
    });
});

router.post('/api/v1/user/details/info', async (req, res) => {
    const userId = req.headers['userid'];

    if (!userId) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId });

    const userInfo = {
        userId: user.userId,
        sex: user.sex || 2,
        nickName: user.nickname || '',
        birthday: user.birthday || '',
        details: user.introduction || '',
        diamonds: user.diamonds || 0,
        golds: user.gold || 0,
        picUrl: user.picUrl || '',
        hasPassword: true,
        stopToTime: null
    };

    res.status(200).json({ code: 1, message: 'SUCCESS', data: userInfo });
});

router.post('/api/v1/app/login', async (req, res) => {
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId: uid });

    if (!user) {
        return res.status(200).json({
            code: 102,
            message: 'User ID or username not found.',
            data: null
        });
    }

    if (user.password !== password) {
        return res.status(200).json({
            code: 108,
            message: 'Incorrect password.',
            data: null
        });
    }

    res.status(200).json({
        code: 1,
        data: {
            userId: user.userId,
            accessToken: 'Not implemented',
            telephone: '',
            email: ''
        },
        message: 'SUCCESS'
    });
});

module.exports = router;

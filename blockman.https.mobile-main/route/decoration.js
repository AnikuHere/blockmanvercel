const express = require('express');
const router = express.Router(); 

const tops = require('../config/decoration/1');
const hairs = require('../config/decoration/2');
const wings = require('../config/decoration/3');
const faces = require('../config/decoration/4');
const emotes = require('../config/decoration/5');
const colors = require('../config/decoration/6');
const backgrounds = require('../config/decoration/7');
const vipColors = require('../config/decoration/part-8-vip');

const decorations = [tops, hairs, wings, faces, emotes, colors, backgrounds, vipColors];

router.get('/api/v1/decorations/1', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: tops });
});

router.get('/api/v1/decorations/2', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: hairs });
});

router.get('/api/v1/decorations/3', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: wings });
});

router.get('/api/v1/decorations/4', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: faces });
});

router.get('/api/v1/decorations/5', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: emotes });
});

router.get('/api/v1/decorations/6', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: colors });
});

router.get('/api/v1/decorations/7', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: backgrounds });
});

router.get('/api/v1/decorations/8', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: placeholder });
});

router.get('/api/v1/vip/decorations/users/6', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: vipColors });
});

router.get('/api/v1/vip/decorations/users/1', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.get('/api/v1/vip/decorations/users/3', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.put('/api/v1/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

router.delete('/api/v1/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

// Made for v2

router.get('/api/v2/decorations/1', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: tops });
});

router.get('/api/v2/decorations/2', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: hairs });
});

router.get('/api/v2/decorations/3', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: wings });
});

router.get('/api/v2/decorations/4', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: faces });
});

router.get('/api/v2/decorations/5', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: emotes });
});

router.get('/api/v2/decorations/6', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: colors });
});

router.get('/api/v2/decorations/7', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: backgrounds });
});

router.get('/api/v2/decorations/8', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: placeholder });
});

router.get('/api/v2/vip/decorations/users/6', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: vipColors });
});

router.get('/api/v2/vip/decorations/users/1', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.get('/api/v2/vip/decorations/users/3', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.put('/api/v2/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

router.delete('/api/v2/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();  

//const subject_text = '{"contactSubject": ["General Enquery","Classes","Schedules","Instrnctor","Prices","Other","Ping"]}'
const category_file = require('../data/occupation-cat.json');

router.get('/', (req, res) => {
    //res.end(subject_text);
    res.json(category_file);
});

module.exports = router;
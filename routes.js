const Person = require("./person")
const express = require('express');
const router = express.Router();
//Post Method
router.post('/post', async(req, res) => {
    const data = new Person({
        dateOfBirth: req.dateOfBirth,
        grade: req.grade,
        school: req.school,
        gender: req.gender,
        zipCode: req.zipCode,
        borough: req.borough,
        ethnicity: req.ethnicity,
        language: req.language,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router
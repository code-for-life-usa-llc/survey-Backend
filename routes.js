const express = require("express");
const router = express.Router();
const Person = require("./schemas/person");

//Post Method
router.post("/post", async (req, res) => {
  console.log("POST METHOD")
  const data = new Person({
    dateOfBirth: req.body.dateOfBirth,
    grade: req.body.grade,
    school: req.body.school,
    gender: req.body.gender,
    zipCode: req.body.zipCode,
    borough: req.body.borough,
    ethnicity: req.body.ethnicity,
    language: req.body.language,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

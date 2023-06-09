const Person = require("./schemas/person")
const express = require('express');
const router = express.Router();
//Post Method
router.post('/post', async(req, res) => {
    console.log("endpoint hit!")
    const data = new Person({
        //      INFORMATION
        dateOfBirth: req.body.dateOfBirth,
        grade: req.body.grade,
        school: req.body.school,
        gender: req.body.gender,
        zipCode: req.body.zipCode,
        borough: req.body.borough,
        ethnicity: req.body.ethnicity,
        language: req.body.language,
        //      General
        favArtist: req.body.favArtist,
        favSocialMedia: req.body.favSocialMedia,
        favFood: req.body.favFood,
        favVideoGame: req.body.favVideoGame,
        instrument: req.body.instrument,
        //      Education
        likeSchool: req.body.likeSchool,
        favSubject: req.body.favSubject,
        graduate: req.body.graduate,
        schoolMatters: req.body.schoolMatters,
        goToCollage: req.body.goToCollage,
        repeatGrade: req.body.repeatGrade,
        //      Faith & Religion
        god: req.body.god,
        churchOrMosque: req.body.churchOrMosque,
        faithImportant: req.body.faithImportant,
        denomination: req.body.denomination,
        community: req.body.community,
        //      Hope for the Future
        hopeful: req.body.hopeful,
        betterOrWorse: req.body.betterOrWorse,
        concernsForFuture: req.body.concernsForFuture,
        positiveDifference: req.body.positiveDifference,
        //    Social Issues
        mostImportantIssue: req.body.mostImportantIssue,
        cityDoingEnough: req.body.cityDoingEnough,
        //      Mental Health
        concernedForMentalHealth: req.body.concernedForMentalHealth,
        engagedHarmfulOrRisky: req.body.engagedHarmfulOrRisky,
        thoughtOfSuicide: req.body.thoughtOfSuicide,
        supportive: req.body.supportive,
        mentor: req.body.mentor,
    })

    try {
        if(data.zipCode.toString().length !== 5){
            throw new Error("zipCode must be 5 numbers")
        }
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  });

//GET ALL Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET one Method
router.get("/getbyId/:id", async (req, res) => {
  try {
    const data = await Person.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//queryAny Method
router.put("/queryAny/", async (req, res) => {
  try {
    const result = await Person.find(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Any Method
router.patch("/updateAny/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true };
    const updatedData = req.body;
    const result = await Person.findByIdAndUpdate(
      id,
      { $set: updatedData },
      options
    );
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

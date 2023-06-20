// const express = require("express");
// const router = express.Router();
// const Person = require("./schemas/person");

// //Post Method
// router.post("/post", async (req, res) => {
//   const data = new Person({
//     dateOfBirth: req.body.dateOfBirth,
//     grade: req.body.grade,
//     school: req.body.school,
//     gender: req.body.gender,
//     zipCode: req.body.zipCode,
//     borough: req.body.borough,
//     ethnicity: req.body.ethnicity,
//     language: req.body.language,
//   });

//   try {
//     const dataToSave = await data.save();

//     console.log("DATA:", dataToSave);
//     res.status(200).json(dataToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;

import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();

const router = Router();
router.post('/hello', (req, res) => res.send('Hello World!'));

export const handler = serverless(api);
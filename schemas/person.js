const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  /**
   * General information of the person.
   */
  dateOfBirth: {
    required: true,
    type: Date,
  },
  grade: {
    required: true,
    type: String,
  },
  school: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
  zipCode: {
    required: true,
    type: Number,
  },
  borough: {
    required: true,
    type: String,
  },
  ethnicity: {
    required: true,
    type: [String],
  },
  languages: {
    required: true,
    type: [String],
  },

  /** Opinions made by the person. */
  favArtist: {
    required: true,
    type: String,
  },

  favSocialMedia: {
    required: true,
    type: String,
  },

  favFood: {
    required: true,
    type: String,
  },

  favVideoGame: {
    required: true,
    type: String,
  },
  instrument: {
    required: true,
    type: String,
  },

  /**
   * Education properties of the person.
   */
  likeSchool: {
    required: true,
    type: Boolean,
  },

  favSubject: {
    required: true,
    type: String,
  },

  graduate: {
    required: true,
    type: Boolean,
  },

  goToCollege: {
    required: true,
    type: Boolean,
  },

  repeatGrade: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", userSchema);

const { Schema, model } = require("mongoose");

const CourseDescriptionSchema = new Schema({
  what: { type: String, required: true, trim: true, minLength: 20 },
  why: { type: String, required: true, trim: true, minLength: 20 },
  laborMarket: { type: String, minLength: 20 },
  prerequisite: { type: String, minLength: 20 },
  topics: { type: String, minLength: 20 },
  advantage: { type: String, minLength: 20 },
  projects: { type: [String], minLength: 20 },
});

const CourseEpisodesSchema = new Schema({
  title: { type: String, required: true, trim: true, minLength: 6 },
  video: { type: String, required: true, trim: true, minLength: 10 },
});

const CourseSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, minLength: 4 },
    img: { type: String, required: true, trim: true },
    // description: { type: [String], required: true },
    description: {
      type: CourseDescriptionSchema,
      required: true,
    },
    episodes: {
      type: [CourseEpisodesSchema],
    },
    episodesCount: { type: Number, default: 0 },
    studentsCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const CourseModel = model("course", CourseSchema); // third arg should be "courses" but it's going to automatically done in the model function

module.exports = {
  CourseModel,
};

const { Schema, model } = require("mongoose");
const { CourseModel } = require("./course.model");
const { ArticleModel } = require("./article.model");

const UserRegisteredCoursesSchema = CourseModel.schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, minLength: 4 },
    email: { type: String, required: true, trim: true, minLength: 11 },
    password: { type: String, required: true, trim: true, minLength: 6 },
    rule: { type: String },
    profilePic: { type: String },
    registeredCourses: { type: [UserRegisteredCoursesSchema] },
    articles: { type: ArticleModel.schema },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("user", UserSchema);

module.exports = {
  UserModel,
};

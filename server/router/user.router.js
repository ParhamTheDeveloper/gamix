const { Router } = require("express");
const { addCourseUsers, getUsers } = require("../controllers/user.controller");
const { CourseModel } = require("../model/course.model");
const { UserModel } = require("../model/user.model");
const router = Router();

router.get("/users", getUsers);

router.patch("/user/course", addCourseUsers);

module.exports = router;

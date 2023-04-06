const { Router } = require("express");
const { addCourseUsers, getUsers } = require("../controllers/user.controller");
const router = Router();

router.get("/users", getUsers);

router.patch("/user/course", addCourseUsers);

module.exports = router;

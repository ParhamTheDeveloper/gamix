const { Router } = require("express");
const courseRouter = require("./course.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const router = Router();

router.use("/api/courses", courseRouter);
router.use("/api/", userRouter);
router.use("/api/", authRouter);

module.exports = router;

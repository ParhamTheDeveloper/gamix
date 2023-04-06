const { Router } = require("express");
const courseRouter = require("./course.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const router = Router();

router.use("/courses", courseRouter);
router.use("/", userRouter);
router.use("/", authRouter);

module.exports = router;

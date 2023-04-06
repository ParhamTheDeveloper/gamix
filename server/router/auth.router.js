const { Router } = require("express");
const { signupAuth, loginAuth } = require("../controllers/auth.controller");
const {
  loginValidator,
  signupValidator,
} = require("../validators/auth.validator");
const { checkValidation } = require("../validators/middlewares/validator");
const router = Router();

router.post("/login", loginValidator(), checkValidation, loginAuth);

router.post("/signup", signupValidator(), checkValidation, signupAuth);

module.exports = router;

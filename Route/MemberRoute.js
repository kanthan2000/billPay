const express = require("express")
const router = express.Router()
const memberController = require("../controller/MemberController")
const loginMember = require("../controller/LoginController")

router.post("/addMember",memberController.AddMember)
router.get("/addMember/:id",memberController.SingleMember)
router.post("/updateMember/:id",memberController.UpdateMember)
router.get("/viewMember",memberController.ViewMember)
router.post("/signup",loginMember.signUP)
module.exports = router;
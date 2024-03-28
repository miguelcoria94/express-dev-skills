var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);

router.get("/create", skillsCtrl.createForm);

router.get("/:id/edit", skillsCtrl.updateForm);

router.delete("/:id", skillsCtrl.deleteOne);

router.post("/", skillsCtrl.create);

router.put("/:id", skillsCtrl.update);

router.get("/:id", skillsCtrl.getSkillById);

module.exports = router;

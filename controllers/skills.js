module.exports = {
  index,
  getSkillById
};

const skills = require("../models/skills");

function index(req, res, next) {
  const getAllSkills = skills.getAllSkills();
  res.render("skills/index", { skills: getAllSkills, title: "All Skills" });
}

function getSkillById(req, res, next) {
  const skill = skills.getOneSkill(req.params.id);
  res.render("skills/id", { skill: skill, title:  `${skill.skill} Details` });
}

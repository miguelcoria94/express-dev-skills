module.exports = {
  index,
  getSkillById,
  create,
  createForm,
  deleteOne,
  update,
  updateForm,
};

const skills = require("../models/skills");

function index(req, res, next) {
  const getAllSkills = skills.getAllSkills();
  res.render("skills/index", { skills: getAllSkills, title: "All Skills" });
}

function getSkillById(req, res, next) {
  const skill = skills.getOneSkill(req.params.id);
  res.render("skills/id", { skill: skill, title: `${skill.skill}` });
}

function create(req, res, next) {
  skills.create(req.body);
  res.redirect("/skills");
}

function createForm(req, res, next) {
  res.render("skills/create", { title: "Add Skill" });
}


function deleteOne(req, res, next) {
  skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

function update(req, res, next) {
  skills.update(req.params.id, req.body)
  res.redirect("/skills");
}

function updateForm(req, res, next) {
  const skill = skills.getOneSkill(req.params.id);
  res.render("skills/id/edit", { skill, title: `Edit ${skill.skill}` });
}

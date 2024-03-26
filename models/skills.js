const skills = [
    {
        id: 1,
        skill: 'HTML',
        yearsOfExperience: 5
    },
    {
        id: 2,
        skill: 'CSS',
        yearsOfExperience: 5
    },
    {
        id: 3,
        skill: 'JavaScript',
        yearsOfExperience: 5
    },
    {
        id: 4,
        skill: 'Node.js',
        yearsOfExperience: 5
    },
    {
        id: 5,
        skill: 'Express.js',
        yearsOfExperience: 2
    },
    {
        id: 6,
        skill: 'React',
        yearsOfExperience: 2
    },
    {
        id: 7,
        skill: 'MongoDB',
        yearsOfExperience: 0
    }
]

function getAllSkills() {
    return skills;
}

function getOneSkill(id){
    return skills.find(skill => skill.id === parseInt(id));
}

module.exports = {
    getAllSkills,
    getOneSkill
}
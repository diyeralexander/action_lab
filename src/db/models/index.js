const {Experience,ExperienceSchema} = require('./experience.model');

function setUpModels(sequelize){
        Experience.init(ExperienceSchema,Experience.config(sequelize));


}

module.exports = setUpModels;
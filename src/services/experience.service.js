const {models} = require('../libs/sequelize');

class ExperienceService{

    constructor(){}

      async find(){
        const res = await models.Experience.findAll();
        return res;
      }

        async findById(id){
            const res = await models.Experience.findByPk(id);
            return res;
        }

        async create(data){
            const res = await models.Experience.create(data);
            return res;
        }

        async update(id,data){
            const res = await models.Experience.update(data,{
                where:{
                    id:id
                }
            });
            return res;
        }

        async delete(id){
            const res = await models.Experience.destroy({
                where:{
                    id:id
                }
            });
            return res;
        }





}


module.exports = ExperienceService;

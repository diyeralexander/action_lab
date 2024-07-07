const ExperienceService = require('../services/experience.service');
const service = new ExperienceService();


const create = async (req,res) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

const find = async (req,res) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}  

const findById = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await service.findById(id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

const update = async (req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await service.update(id,data);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

const remove = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}


module.exports = {
    create,
    find,
    findById,
    update,
    remove
};
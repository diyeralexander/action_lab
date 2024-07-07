const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers/experience.controller');

router
.get('/', ExperienceController.find)
.get('/:id', ExperienceController.findById)
.post('/', ExperienceController.create)
.put('/:id', ExperienceController.update)
.delete('/:id', ExperienceController.remove);


module.exports = router;

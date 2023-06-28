const Model = require('../models/Model');

class DogController{
    show(req,res,next){  
        res.render('home')
    }
}

module.exports = new DogController;

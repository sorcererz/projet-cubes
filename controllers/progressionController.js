const progressionModel = require('../models/progressionModel');


class ProgressionController {

    static addLike = (req, res, next) => {
        progressionModel.addLike(req.params.ressourceId)
        .then(()=> {
            return res.status(200).json({
                message : "Ressource liked"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        })
    }
}
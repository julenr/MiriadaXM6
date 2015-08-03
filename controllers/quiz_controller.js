

var models = require('../models/models.js');

exports.index = function(req, res) {
    models.Quiz.findAll().then(function(quizes) {
        res.render('quizes/index',
            {
                quizes: quizes
            }
        );
    });
};

exports.search = function(req, res) {
    searchStr = req.query.search.replace(" ", "%");
    models.Quiz.findAll({where: ["pregunta like ?", "%" + searchStr + "%"]}).then(function(quizes) {
        res.render('quizes/index',
            {
                quizes: quizes
            }
        );
    });
};

exports.show = function(req, res) {
    models.Quiz.find(req.params.quizId).then(function(quiz) {
        res.render('quizes/show',
            {
                quiz: quiz
            }
        );
    });
};

// GET /quizes/answer
exports.answer = function(req, res) {
    models.Quiz.find(req.params.quizId).then(function(quiz) {
        if (req.query.respuesta === quiz.respuesta) {
            res.render('quizes/answer', {respuesta: 'Correcto', id: req.params.quizId});
        }
        else {
            res.render('quizes/answer', {respuesta: 'Incorrecto', id: req.params.quizId});
        }
    });
};

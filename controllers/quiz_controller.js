
// GET /quizes/question
exports.question = function(req, res) {
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answers = function(req, res) {
    if(req.query.respuesta === 'Roma') {
        res.render('quizes/answers', {respuesta: 'Correcto'});
    } else {
        res.render('quizes/answers', {respuesta: 'Incorrecto'});
    }

};

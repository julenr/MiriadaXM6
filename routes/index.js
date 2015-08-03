var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/', quizController.index);
router.get('/quizes/search', quizController.search)
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', authController.credits);

module.exports = router;

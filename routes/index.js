var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answers', quizController.answers);

router.get('/author', authController.credits);

module.exports = router;

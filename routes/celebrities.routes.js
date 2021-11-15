const router = require('express').Router();
const CelebrityModel = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find()
    .then((celebrities) => {
      res.render('celebrities/celebrities.hbs', { celebrities });
    })
    .catch(() => {
      next('Failed loading the list');
    });
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/new-celebrity.hbs');
});

router.post('/celebrities/create', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;

  CelebrityModel.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(() => {
      res.render('celebrities/new-celebrity');
    });
});

module.exports = router;

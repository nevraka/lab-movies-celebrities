const router = require('express').Router();
const MovieModel = require('../models/Movie.model');
const CelebrityModel = require('../models/Celebrity.model');

router.get('/movies', (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render('movies/movies.hbs', { movies });
    })
    .catch(() => {
      next('Failed loading the list');
    });
});

router.get('/movies/create', (req, res, next) => {
  CelebrityModel.find().then((celebrities) => {
    res.render('movies/new-movie.hbs', { celebrities });
  });
});

router.post('/movies/create', (req, res, next) => {
  let { title, genre, plot, cast } = req.body;

  MovieModel.create({ title, genre, plot, cast })
    .then(() => {
      res.redirect('/movies');
    })
    .catch(() => {
      next('Movie list failed!');
    });
});

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;

  MovieModel.findById(id)
    .populate('cast')
    .then((movie) => {
      res.render('movies/movie-details', { movie });
    })
    .catch(() => {
      next('Movie id failed!');
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;

  MovieModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(() => {
      next('Movie delete failed!');
    });
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Promise.all([CelebrityModel.find(), MovieModel.findById(id)])
    .then(([celebrities, movie]) => {
      res.render('movies/edit-movie.hbs', { celebrities, movie });
    })
    .catch(() => {
      next('Movie delete failed!');
    });
});

router.post('/movies/:id/edit', (req, res, next) => {
  let { cast, title, genre, plot } = req.body;
  const { id } = req.params;

  MovieModel.findByIdAndUpdate(id, { cast, title, genre, plot })
    .then(() => {
      res.redirect('/movies');
    })
    .catch(() => {
      next('Editing failed');
    });
});

module.exports = router;

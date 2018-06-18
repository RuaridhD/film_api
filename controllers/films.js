const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = new express.Router

filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]})
}); //SHOW checked and works

filmRouter.put('/:id', function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
}) //UPDATE checked and works

filmRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  films.splice(index, 1);
  res.json({data: films});
}) //DESTROY checked and works

filmRouter.get('/', function(req, res){
  res.json({AllFilms: films});
}); //INDEX checked and works

filmRouter.post('/', function(req, res){
  const newFilm = new Film(
    req.body
  )
  films.push(newFilm);
  res.json({AllFilms : films})
}); //CREATE checked and works

module.exports = filmRouter;

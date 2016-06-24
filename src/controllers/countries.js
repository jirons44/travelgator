/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('countries/index');
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  res.render('countries/show');
});

router.post('/', (req, res) => {
  const c = new Country(req.body);
  c.photos.push(req.body.photo);
  c.save(() => {
    res.redirect('/countries');
  });
});

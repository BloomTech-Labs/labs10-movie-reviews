const router = require('express').Router();

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getReviews
// requests all the reviews in the reviews database)
// ==============================================

const reviewsDb = require('./reviewsHelper.js');

//router.get, router.delete, router.put, router.post requests will go here. 
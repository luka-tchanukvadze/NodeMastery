const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

// POST /tour/432dfsa/reviews
// GET /tour/432dfsa/reviews
// POST /reviews

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .delete(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.deleteReview
  )
  .patch(reviewController.updateReview);

module.exports = router;

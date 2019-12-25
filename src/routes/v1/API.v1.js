'use strict';

// Imports
import express from 'express';
import FoodTrucks from './FoodTrucks.v1.route';

/**
 * @desc Router to handle API v1.
 * @access public
 * @author Adrián Álvarez C.
 */
let router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({
      pong: true
    });
});

router.use('/foodtrucks', FoodTrucks);

export default router;

'use strict';

// Imports
import express from 'express';
import APIV1 from './v1/API.v1';

/**
 * @desc Router to handle API routes.
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

router.use('/v1/', APIV1);

export default router;

'use strict';

// Imports
import express from 'express';
import validate from 'express-validation';
import validations from '../../validations/v1/foodtruck.v1.val';
import { getFoodTrucks, getNearFoodTrucks } from '../../controller/FoodTruckCtrl';

/**
 * @desc Router to handle food trucks endpoints v1.
 * @access public
 * @author Adrián Álvarez C.
 */
let router = express.Router();

router.get('/', validate(validations.getFoodTrucks), getFoodTrucks);
router.get('/near', validate(validations.getNearFoodTrucks), getNearFoodTrucks);

export default router;

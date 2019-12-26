'use strict';

// Imports
import Joi from 'joi';

export default {
  getFoodTrucks: {
    params: {},
    query: {},
    body: {}
  },
  getNearFoodTrucks: {
    params: {},
    query: {
      count: Joi.number().integer().default(5).required(),
      lat: Joi.number().default(0).required(),
      lon: Joi.number().default(0).required()
    },
    body: {}
  }
};
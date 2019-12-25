'use strict';

import {
  getFoodTrucksOp
} from '../model/FoodTruckModel';

/**
 * @desc Get all food trucks.
 * @author Adrián Álvarez C.
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
export const getFoodTrucks = async (req, res) => {
  res.json(await getFoodTrucksOp());
};

/**
 * @desc Get distance between two GPS points.
 * @author Adrián Álvarez C.
 * @param {number} lat1 Latitude first point.
 * @param {number} lon1 Longitude first point.
 * @param {number} lat2 Latitude second point.
 * @param {number} lon2 Longitude second point.
 * @return {number} Distance.
 */
const distanceBetweenTwoPoints = (lat1, lon1, lat2, lon2) => {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  } else {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
    return Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;
  }
};

/**
 * @desc Get all food trucks.
 * @author Adrián Álvarez C.
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
export const getNearFoodTrucks = async (req, res) => {
  const {
    count,
    lat,
    lon
  } = req.query;
  const foodTrucks = await getFoodTrucksOp();
  //
  let distanceMapper = foodTrucks.map(truck=>{
    return {
      locationid: truck.locationid,
      distance: distanceBetweenTwoPoints(lat, lon, truck.Latitude, truck.Longitude)
    };
  }).sort((a, b) => {
    return a.distance - b.distance;
  }).slice(0, count).reduce((prev, curr)=>{
    prev[curr.locationid] = curr.distance;
    return prev;
  }, {});

  const requestedFoodTrucks = foodTrucks.filter(e=>{
    return Object.keys(distanceMapper).indexOf(e.locationid) !== -1;
  }).map(e=>{
    e.distance = distanceMapper[e.locationid];
    return e;
  }).sort((a, b)=>{
    return a.distance - b.distance;
  });

  res.json(requestedFoodTrucks);
};
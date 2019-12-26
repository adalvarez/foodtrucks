'use strict';

import csv from 'csvtojson'

const FoodTruckDB = "H:\\foodtrucks\\src\\model\\Mobile_Food_Facility_Permit.csv";

/**
 * @desc Model: Get all food trucks.
 * @access private
 * @author Adrián Álvarez C.
 * @return {Promise}
 */
export const getFoodTrucksOp = async () => {
  return csv().fromFile(FoodTruckDB);
};

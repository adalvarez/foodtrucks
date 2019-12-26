import settings from './../assets/settings';
import axios from 'axios';

const endpointName = 'foodtrucks';

const getFoodTrucks = () => {
  return axios({
    method: 'GET',
    url: `${settings.APIv1URL}${endpointName}`
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return [];
  });
}

const getNearFoodTrucks = (lat, lon, count) => {
  return axios({
    method: 'GET',
    url: `${settings.APIv1URL}${endpointName}/near`,
    params: {
      lat,
      lon,
      count
    }
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return [];
  });
}

export default {
  getFoodTrucks,
  getNearFoodTrucks
};
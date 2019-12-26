import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import './Dashboard.css';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import NearestFoodTrucks from '../NearestFoodTrucks/NearestFoodTrucks';
import FoodTrucks from '../FoodTrucks/FoodTrucks';

/**
 * @desc Dashboard Component.
 * @author Adrián Álvarez C.
 * @access public
 * @version 0.1.0
 * @extends {Component}
 */
class Dashboard extends Component {

  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
            <div>
                <Redirect from="/" to="foodtrucks" />
                <Route path='/foodtrucks' component={FoodTrucks} />
                <Route path='/near' component={NearestFoodTrucks} />
            </div>
        </div>
      </Router>
    );
  }
}

export default Dashboard;

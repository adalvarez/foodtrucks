import React, { Component } from 'react';
import './FoodTrucks.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import FoodTruckCtrl from '../../controllers/FoodTruckCtrl';
import settings from '../../assets/settings';
import matchSorter from 'match-sorter';
import {
  FacilityType, 
  Status, 
  Schedule
} from '../../assets/constants';

/**
 * @desc Food Trucks Component. 
 * @author Adrián Álvarez C.
 * @access public
 * @version 0.0.0
 * @extends {Component}
 */
export default class FoodTrucks extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }

  async componentWillMount() {
    const data = await FoodTruckCtrl.getFoodTrucks();
    this.setState({ data });
  }

  render() {
    return (
      <div className="table" >
        <ReactTable
          data={this.state.data}
          filterable
          columns={[
            {
              Header: "LocationId",
              accessor: "locationid",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["locationid"] }),
              filterAll: true
            },
            {
              Header: "Applicant",
              accessor: "Applicant",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Applicant"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.Applicant}>{row.original.Applicant}</span>
              )
            },
            {
              Header: "Facility Type",
              accessor: "FacilityType",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["FacilityType"] }),
              filterAll: true,
              width: 40,
              Cell: row => (
                <div className="imageDiv">
                  <img width="30" src={FacilityType[row.original.FacilityType]} title={row.original.FacilityType} alt={row.original.FacilityType} />
                </div>
              )
            },
            {
              Header: "CNN",
              accessor: "cnn",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["cnn"] }),
              filterAll: true
            },
            {
              Header: "Location Description",
              accessor: "LocationDescription",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["LocationDescription"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.LocationDescription}>{row.original.LocationDescription}</span>
              )
            },
            {
              Header: "Address",
              accessor: "Address",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Address"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.Address}>{row.original.Address}</span>
              )
            },
            {
              Header: "Blocklot",
              accessor: "blocklot",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["blocklot"] }),
              filterAll: true,
              className: 'center',
              width: 90
            },
            {
              Header: "Block",
              accessor: "block",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["block"] }),
              filterAll: true,
              className: 'center',
              width: 70
            },
            {
              Header: "Lot",
              accessor: "lot",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["lot"] }),
              filterAll: true,
              className: 'center',
              width: 70
            },
            {
              Header: "Permit",
              accessor: "permit",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["permit"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.permit}>{row.original.permit}</span>
              )
            },
            {
              Header: "Status",
              accessor: "Status",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Status"] }),
              filterAll: true,
              width: 60,
              Cell: row => (
                <div className="imageDiv">
                  <img width="30" src={Status[row.original.Status]} title={row.original.Status} alt={row.original.Status} />
                </div>
              )
            },
            {
              Header: "FoodItems",
              accessor: "FoodItems",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["FoodItems"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.FoodItems}>{row.original.FoodItems}</span>
              )
            },
            {
              Header: "X",
              accessor: "X",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["X"] }),
              filterAll: true,
              width: 80,
              Cell: row => (
                <span title={row.original.X}>{row.original.X}</span>
              )
            },
            {
              Header: "Y",
              accessor: "Y",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Y"] }),
              filterAll: true,
              width: 80,
              Cell: row => (
                <span title={row.original.Y}>{row.original.Y}</span>
              )
            },
            {
              Header: "Latitude",
              accessor: "Latitude",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Latitude"] }),
              filterAll: true,
              width: 80,
              Cell: row => (
                <span title={row.original.Latitude}>{row.original.Latitude}</span>
              )
            },
            {
              Header: "Longitude",
              accessor: "Longitude",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Address"] }),
              filterAll: true,
              width: 80,
              Cell: row => (
                <span title={row.original.Longitude}>{row.original.Longitude}</span>
              )
            },
            {
              Header: "Schedule",
              accessor: "Schedule",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Schedule"] }),
              filterAll: true,
              width: 60,
              Cell: row => (
                <div className="imageDiv">
                  <a target="_blank" rel="noopener noreferrer" href={row.original.Schedule}>
                    <img width="30" src={Schedule} title={row.original.Schedule} alt={row.original.Schedule} />
                  </a>
                </div>
              )
            },
            {
              Header: "Dayshours",
              accessor: "dayshours",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["dayshours"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.dayshours}>{row.original.dayshours}</span>
              )
            },
            {
              Header: "NOISent",
              accessor: "NOISent",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["NOISent"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.NOISent}>{row.original.NOISent}</span>
              )
            },
            {
              Header: "Approved",
              accessor: "Approved",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Approved"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.Approved}>{row.original.Approved}</span>
              )
            },
            {
              Header: "Received",
              accessor: "Received",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["Received"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.Received}>{row.original.Received}</span>
              )
            },
            {
              Header: "Prior Permit",
              accessor: "PriorPermit",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["PriorPermit"] }),
              filterAll: true,
              width: 50,
              className: 'center'
            },
            {
              Header: "ExpirationDate",
              accessor: "ExpirationDate",
              filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["ExpirationDate"] }),
              filterAll: true,
              Cell: row => (
                <span title={row.original.ExpirationDate}>{row.original.ExpirationDate}</span>
              )
            }
          ]}
          defaultPageSize={settings.Navigation.defaultRows}
          className="-striped -highlight"
        />

      </div>
    );
  }
}

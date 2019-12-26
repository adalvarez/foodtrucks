import React, { Component } from 'react';
import './NearestFoodTrucks.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import ResultMap from './ResultMap';
import {
  Row,
  Col
} from 'reactstrap';
import FoodTruckCtrl from '../../controllers/FoodTruckCtrl';
import settings from '../../assets/settings';
import matchSorter from 'match-sorter';
import {
  FacilityType,
  Status,
  Schedule
} from '../../assets/constants';

/**
 * @desc Nearest Food Trucks Component. 
 * @author Adrián Álvarez C.
 * @access public
 * @version 0.0.0
 * @extends {Component}
 */
export default class NearestFoodTrucks extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null,
      map: null,
      displayResults: false,
      latInp: 0.0,
      lngInp: 0.0,
      count: 5
    };
    this.search = this.search.bind(this);
  }

  async search() {
    this.setState({
      data: null,
      map: null,
      displayResults: false
    })
    const lat = this.state.latInp;
    const lng = this.state.lngInp;
    const count = this.state.count;
    const data = await FoodTruckCtrl.getNearFoodTrucks(lat, lng, count);
    console.log(data);
    const map = this.buildMap(lat, lng, data);
    this.setState({
      data,
      map,
      displayResults: true
    })
  }

  buildMap(lat, lng, data) {
    let map = {
      lat: lat,
      lng: lng,
      markers: data.map(record => {
        return {
          lat: record.Latitude,
          lng: record.Longitude,
          info: record
        }
      })
    };
    return map;
  }

  render() {
    return (
      <div className="searcher">
        <Row className="row2">
          <div className="container form-request">
            <div className="col-in-line">
              <label htmlFor="Latitude">Latitude</label>
              <input className="form-control" type="number" step="0.01" defaultValue="0.0"
                name="lat" id="Latitude" onChange={event => this.setState({ latInp: event.target.value })} />
            </div>
            <div className="col-in-line">
              <label htmlFor="Longitude">Longitude</label>
              <input className="form-control" type="number" step="0.01" defaultValue="0.0"
                name="lng" id="Longitude" onChange={event => this.setState({ lngInp: event.target.value })} />
            </div>
            <div className="col-in-line">
              <label htmlFor="Count">Count</label>
              <input className="form-control count" type="number" step="1" defaultValue="5"
                name="lng" id="Count" onChange={event => this.setState({ count: event.target.value })} />
            </div>
            <button className="btn btn-secondary btn-request" onClick={this.search}>Search</button>
          </div>
        </Row>
        {
          this.state.displayResults ?
            <div>
              <Row className="results-panel row2">
                <Col>
                  <ResultMap map={this.state.map} lng={this.state.map} />
                </Col>
                <Col>
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
                      }
                    ]}
                    defaultPageSize={settings.Navigation.defaultRows}
                    className="-striped -highlight"
                  />
                </Col>
              </Row>
            </div>
            : null
        }
      </div>
    );
  }
}
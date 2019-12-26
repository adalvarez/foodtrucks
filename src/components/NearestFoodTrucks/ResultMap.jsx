import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';
import './NearestFoodTrucks.css';
import settings from '../../assets/settings';

/**
 * @desc ResultMap Component. 
 * @author Adrián Álvarez C.
 * @access public
 * @version 0.0.0
 * @extends {Component}
 */
export class ResultMap extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
    this.renderMarkers = this.renderMarkers.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  }

  onMapClicked() {
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
    }
  }

  renderMarkers() {
    return this.props.map.markers.map(marker => {
      return <Marker
        name={marker.info.Applicant}
        position={{ lat: marker.lat, lng: marker.lng }} />
    })
  }

  render() {
    return (
      <div className="border-map">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={14}
          initialCenter={{
            lat: this.props.map.lat,
            lng: this.props.map.lng
          }}
        >
          {
            this.props.map.markers.map(marker => {
              return <Marker
                name={marker.info.Applicant}
                onClick={this.onMarkerClick}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            })
          }
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: settings.MapsKey
})(ResultMap)
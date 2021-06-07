import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <>
                <div className="clearfix"></div>
                <div className="map-section position-relative">
                    <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    </Map>
                </div>
                <div className="clearfix"></div>
            </>
        )
    }
}

export default GoogleApiWrapper({
    // apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(GoogleMap)
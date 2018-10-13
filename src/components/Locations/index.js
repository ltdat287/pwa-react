import React, {PureComponent} from 'react';
import NavBar from "../NavBar/index";
import {getLocation, getLocationValue} from "../../utils/utils";

class Locations extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      img_url: ''
    };
  }

  sentLocations = () => {
    getLocation().then(resp => {
      const {longitude, latitude} = resp;
      if (longitude && latitude) {
        const latlon = latitude + ',' + longitude;
        if (latlon) {
          const img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&markers=color:blue|label:S|${latlon}&size=800x600&sensor=false&key=AIzaSyD3zezWhLRYPWgRMmhZn93y57Rh7oybznE`;

          this.setState({img_url: img_url});
        }
      }
    });
  };

  render() {
    return (
      <div>
        <NavBar/>
        <div className="page-info">
          <p>This is the Locations page.</p>
          <button onClick={() => this.sentLocations()}>Sent Locations</button>

          <div className="map-info">
            {
              this.state.img_url &&
              <img src={this.state.img_url} alt="Google Map"/>
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Locations;

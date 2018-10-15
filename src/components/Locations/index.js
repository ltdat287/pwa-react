import React, {PureComponent} from 'react';
import NavBar from "../NavBar/index";
import {getImageMapUrl} from "../../utils/utils";

class Locations extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      img_url: ''
    };
  }

  sentLocations = () => {
    getImageMapUrl().then(resp => {
      if (resp) {
        this.setState({
          img_url: resp
        })
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

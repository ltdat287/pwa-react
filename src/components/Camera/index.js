import React, {Component} from 'react';
import NavBar from "../NavBar/index";
import './Camera.css';
import {Webcam} from "../../utils/webcam";

class Camera extends Component {
  constructor(props) {
    super(props);

    this.webcam = null;
    this.state = {
      capturedImage: null,
      captured: false
    }
  }

  captureImage = async () => {
    const captureData = this.webcam.takeBase64Photo({type: 'jpeg', quality: 0.8});
    this.setState({
      captured: true,
      capturedImage: captureData.base64
    })
  };

  discardImage = () => {
    this.setState({
      captured: false,
      capturedImage: null
    })
  };

  componentDidMount() {
    // initialize the camera
    this.canvasElement = document.createElement('canvas');
    this.webcam = new Webcam(document.getElementById('webcam'), this.canvasElement);
    this.webcam.setup().catch(() => {
      alert('Error getting access to your camera.')
    })
  }

  render() {
    const imageDisplay = this.state.capturedImage ?
      <img src={this.state.capturedImage} alt="captured" width="350"/>
      :
      <span/>;

    const buttons = this.state.captured ?
      <div>
        <button className="deleteButton" onClick={this.discardImage}> Delete Photo</button>
      </div> :
      <button className="captureButton" onClick={this.captureImage}> Take Picture </button>

    return (
      <div>
        <NavBar/>
        <div className="page-info">
          <p>This is the test Camera page.</p>
          <video autoPlay playsInline muted id="webcam" width="100%" height="200"/>
          <br/>
          <div className="imageCanvas">
            {imageDisplay}
          </div>
          {buttons}
        </div>

      </div>
    )
  }
}

export default Camera;

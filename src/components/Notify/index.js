import React, {PureComponent} from 'react';
import {sendNotify} from "../../fetch";
import NavBar from "../NavBar/index";
import FacebookLogin from 'react-facebook-login';

class Notify extends PureComponent {
  sentNotify = () => {
    sendNotify();
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div>
        <NavBar/>
        <div className="page-info">
          <p>This is the Notify page.</p>
          <button onClick={() => this.sentNotify()}>Sent Notify</button>

          <p>Test facebook login</p>
          <FacebookLogin
            appId={'1065596266915898'}
            autoLoad={true}
            fields={'name,email,picture'}
            callback={this.responseFacebook}
          />
        </div>

      </div>
    );
  }
}

export default Notify;

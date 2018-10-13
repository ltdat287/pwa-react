import React, {PureComponent} from 'react';
import {sendNotify} from "../../fetch";
import NavBar from "../NavBar/index";

class Notify extends PureComponent {
  sentNotify = () => {
    sendNotify();
  };

  render() {
    return (
      <div>
        <NavBar/>
        <div className="page-info">
          <p>This is the Notify page.</p>
          <button onClick={() => this.sentNotify()}>Sent Notify</button>
        </div>

      </div>
    );
  }
}

export default Notify;

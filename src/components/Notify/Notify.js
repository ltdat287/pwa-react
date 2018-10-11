import React, {PureComponent} from 'react';
import {sendNotify} from "../../fetch";

class Notify extends PureComponent {
  sentNotify = () => {
    sendNotify();
  };

  render() {
    return (
      <div className="show-notify">
        <p className="page-info">This is the Notify page.</p>
        <button onClick={() => this.sentNotify()}>Sent Notify</button>
      </div>
    );
  }
}

export default Notify;

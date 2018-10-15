import React, {PureComponent} from 'react';
import {Link} from 'react-router';

class NavBar extends PureComponent {

  render() {
    return (
      <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/notify">Notify</Link>
        <Link to="/location">Location</Link>
      </div>
    );
  }
}

export default NavBar;
import React, {Component} from 'react';
import {Router, browserHistory, Route} from 'react-router';
import './App.css';
import {createEventForFirebaseMessage, initializePush} from "./push/initialize";
import Notify from "./components/Notify/index";
import NavBar from "./components/NavBar/index";
import Locations from "./components/Locations/index";
import Camera from "./components/Camera/index";

const Template = ({title}) => (
  <div>
    <NavBar/>
    <p className="page-info">This is the {title} page.</p>
  </div>
);

const Feed = (props) => (
  <Template title="Feed"/>
);

const Profile = (props) => (
  <Template title="Profile"/>
);

class App extends Component {
  constructor(props) {
    super(props);
    initializePush();
    createEventForFirebaseMessage();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Feed}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/notify" component={Notify}/>
        <Route path="/location" component={Locations}/>
        <Route path="/camera" component={Camera}/>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Router, browserHistory, Route, Link} from 'react-router';
import './App.css';
import {createEventForFirebaseMessage, initializePush} from "./push/initialize";

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div>
);

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

  fetchApi = () => {
    fetch('api/test', {
      accept: 'application/json'
    }).then(resp => {
      console.log(resp.json());
    });
  };

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Feed}/>
        <Route path="/profile" component={Profile}/>
      </Router>
    );
  }
}

export default App;

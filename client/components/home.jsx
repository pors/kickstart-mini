import React from 'react';
import { Link } from "react-router";

var Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div><Link to="/page">Some page</Link></div>
      </div>
    );
  }
});

export default Home;

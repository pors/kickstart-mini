import React from 'react';
import { Link } from "react-router";

var More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div>
        <h1>More</h1>
        <p><Link to="/home">Back home</Link></p>
      </div>
    )
  }
});

export default More;

import React from 'react';
import { Link } from "react-router";

var Page = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div>
        <h1>Page</h1>
        <p><Link to="/more">More</Link></p>
      </div>
    )
  }
});

export default Page;

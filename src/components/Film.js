import React, { Component } from 'react';
import '../App.css';

class Film extends Component {
  render() {
    return (
      <div className="film">
        <a href={this.props.url} target="blank">{this.props.children}</a>
      </div>
    )
  }
}

export default Film;

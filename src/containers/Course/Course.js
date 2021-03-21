import React, { Component } from 'react';

import './Course.css';

class Course extends Component {
  state = {
    title: '',
  };

  getSearch = () => {
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      if (this.state.title !== params[1]) this.setState({ title: params[1] });
    }
  };

  componentDidMount() {
    console.log('[Course.js]: componentDidMount');
    this.getSearch();
  }

  componentDidUpdate() {
    this.getSearch();
  }

  render() {
    console.log(this.props);
    return (
      <div className="IndividualCourse">
        <h1>{this.state.title}</h1>
        <p>
          You selected the Course with ID:{' '}
          <strong>{this.props.match.params.id}</strong>
        </p>
      </div>
    );
  }
}

export default Course;

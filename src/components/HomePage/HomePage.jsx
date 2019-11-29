import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../utils/utils.js';

export default class HomePage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    utils.request('/trending/movie/day').then(res => {
      this.setState({
        movies: res.results
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        {this.state.movies.map(m => {
          return (
            <div key={m.id}>
              <Link to={'/movies/' + m.id}>{m.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

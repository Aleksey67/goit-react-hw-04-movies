import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import utils from '../../utils/utils.js';

export default class MoviePage extends Component {
  state = {
    results: null
  };

  componentDidMount() {
    this.search();
  }

  onSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    this.props.history.push('?query=' + encodeURIComponent(query));
    setTimeout(() => this.search(), 100);
  }

  search() {
    const params = queryString.parse(this.props.location.search);

    if (params.query) {
      utils.request('/search/movie?query=' + encodeURIComponent(params.query)).then(res => {
        this.setState({ results: res.results });
      });
    }
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" name="query" />
          <input type="submit" />
        </form>
        {results && (
          <ul>
            {results.map(r => (
              <li key={r.id}>
                <Link to={'/movies/' + r.id}>{r.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

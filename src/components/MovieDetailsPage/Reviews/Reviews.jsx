import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../../../utils/utils.js';

class Cast extends Component {
  state = {
    reviews: null
  };

  componentDidMount() {
    const movieId = this.props.movieId;
    utils.request('/movie/' + movieId + '/reviews').then(reviews => {
      this.setState({ reviews });
    });
  }

  render() {
    const reviews = this.state.reviews;

    return (
      <div>
        {reviews && reviews.results.length ? (
          <ul>
            {reviews.results.map(r => (
              <li key={r.id}>
                <strong>{r.author}</strong>
                <p>{r.content}</p>
                <hr/>
              </li>
            ))}
          </ul>
        ) : 'We dont have any reviews for this movie'}
      </div>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;

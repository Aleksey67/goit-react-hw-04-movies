import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import utils from '../../utils/utils.js';

class MoviePageDetails extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    utils.request('/movie/' + movieId).then(movie => {
      this.setState({ movie });
    });
  }

  render() {
    const type = this.props.type;
    const movie = this.state.movie;

    return (
      <div>
        <div>
          <Link to="/">Go back</Link>
        </div>
        {movie && (
          <div>
            <h1>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h1>
            <div>
              <img src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt="" align="left" />
              <div>User score: {Math.round(movie.vote_average * 10)}%</div>

              <h3>Overview</h3>
              <div>{movie.overview}</div>

              <h3>Genres</h3>
              <div>
                {movie.genres.map(g => (
                  <span key={g.id}> {g.name} </span>
                ))}
              </div>
            </div>
            <hr/>
            <div>Additional information</div>
            <ul>
              <li>
                <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <hr/>
            {type === 'cast' && <Cast movieId={movie.id} />}
            {type === 'reviews' && <Reviews movieId={movie.id} />}
          </div>
        )}
      </div>
    );
  }
}

MoviePageDetails.propTypes = {
  type: PropTypes.string,
};

export default MoviePageDetails;

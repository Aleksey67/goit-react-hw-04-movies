import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../../../utils/utils.js';

class Cast extends Component {
  state = {
    credits: null
  };

  componentDidMount() {
    const movieId = this.props.movieId;
    utils.request('/movie/' + movieId + '/credits').then(credits => {
      this.setState({ credits });
    });
  }

  render() {
    const credits = this.state.credits;

    return (
      <div>
        {credits && (
          <div>
            {credits.cast.map(p => (
              <div key={p.id}>
                <div>
                  <img src={'http://image.tmdb.org/t/p/w185' + p.profile_path} alt=""/>
                </div>
                <div>{p.name}</div>
                <div>Character: {p.character}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;

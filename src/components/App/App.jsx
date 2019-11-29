import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MoviesPage from '../MoviesPage/MoviesPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

const App = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/movies">Moviews</Link>
    </div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies/" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      <Route exact path="/movies/:movieId/cast" render={(props) => <MovieDetailsPage {...props} type="cast" />} />
      <Route exact path="/movies/:movieId/reviews" render={(props) => <MovieDetailsPage {...props} type="reviews" />} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

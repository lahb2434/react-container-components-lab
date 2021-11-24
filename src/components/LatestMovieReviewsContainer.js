import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { ResourceLoader } from 'jsdom';

const NYT_API_KEY = 'DVNZm835Q73nNIXApL7jjwCmPDWKoBTa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  render(){
    return <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
    </div>
  }

  fetchLatestMovieReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(({results}) => {
      this.setState({reviews: results})
    })
  }

  componentDidMount(){
    this.fetchLatestMovieReviews()
  }
}

export default LatestMovieReviewsContainer
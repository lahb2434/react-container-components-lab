import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DVNZm835Q73nNIXApL7jjwCmPDWKoBTa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const API_KEY_PATH = `api-key=${NYT_API_KEY}`;
// Example Call
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey           

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  render(){
    return <div className="searchable-movie-reviews">
      <form onSubmit={this.fetchSearchMovieReviews}>
        <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} />
        <input type="submit" value="SEND IT"></input>
        <p>{`${URL}query=${this.state.searchTerm}&${API_KEY_PATH}`}</p>
      </form>
        <MovieReviews reviews={this.state.reviews}/>
    </div>
  }

  fetchSearchMovieReviews = (event) => {
    event.preventDefault()
    fetch(`${URL}query=${this.state.searchTerm}&${API_KEY_PATH}`)
    .then(response => response.json())
    .then(({results}) => {
      this.setState({reviews: results})
    })
  }

} 

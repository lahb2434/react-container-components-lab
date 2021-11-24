// Code MovieReviews Here
import { render } from "enzyme";
import React from "react";

 const MovieReviews = ({reviews}) => {

  const renderReviews = () => {
    return reviews.map(review => <div className='review'>
      <h3>{review.display_title}</h3>
      <ul>
        <li>Rated {review.mpaa_rating}</li>
        <li>{review.summary_short}</li>
        <li>{review.headline}</li>
      </ul>
      </div>)
  }

  return <div className='review-list'>{renderReviews()}</div>
}

export default MovieReviews

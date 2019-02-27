import React from 'react';

const ReviewForm2 = props => {
  return (
    <form>
      <div className="form-div">
        <p>userId</p>
        <input
          name="userId"
          placeholder="1"
          value={props.userId}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-div">
        <p>movieId</p>
        <input
          name="movieId"
          placeholder="325470"
          value={props.movieId}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-div">
        <p>name</p>
        <input
          name="name"
          placeholder="Jane Smith"
          value={props.name}
          onChange={props.handleInputChange}
        />
        <div className="form-div">
          <input
            name="rating"
            placeholder="1-5"
            value={props.rating}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <div className="form-div">
        <textarea
          rows="25"
          cols="75"
          type="text"
          placeholder="Review Content"
          maxLength="5000"
          value={props.textBody}
          name="textBody"
          onChange={props.handleInputChange}
        />
      </div>

      <button className="write-btn" onClick={props.handleWriteNewReview}>
        Write Review
      </button>
      <button
        className="material-button-raised"
        onClick={props.handleEditReview}
      >
        Update Review
      </button>
    </form>
  );
};

export default ReviewForm2;

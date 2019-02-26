import React from 'react';

const WriteReview = props => {
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
        <p>twitterhandle</p>
        <input
          name="twitterhandle"
          placeholder="@flute19902"
          value={props.twitterhandle}
          onChange={props.handleInputChange}
        />
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

      <button className="write-btn" onClick={props.handleWriteNewReview} />
    </form>
  );
};

export default WriteReview;

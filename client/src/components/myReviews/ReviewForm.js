import React from 'react';

function ReviewForm(props) {
  const btnLabel = props.type === 'edit' ? 'Update' : 'Save';
  const clickHandler = () => {
    return props.type === 'edit'
      ? props.handleEditReview
      : props.handleAddNewReview;
  };
  return (
    <form>
      <h2 className="create-Review">
        {props.type === 'edit' ? 'Edit:' : 'Write Review:'}
      </h2>
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

      <button className="save-update-btn" onClick={clickHandler()}>
        {btnLabel}
      </button>
    </form>
  );
}

export default ReviewForm;

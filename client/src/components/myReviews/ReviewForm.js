import React from 'react';

function ReviewForm(props) {
  return (
    <form>
      <h2 className="create-Review">
        {props.type === 'edit' ? 'Edit:' : 'Write Review:'}
      </h2>
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

      <button className="save-update-btn" onClick={clickHandler}>
        {btnLabel}
      </button>
    </form>
  );
}

export default ReviewForm;

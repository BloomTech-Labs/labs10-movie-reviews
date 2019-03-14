import React from 'react';
import './deletemodal.css';

const DeleteModal = props => {
  return (
    <div
      className="modal-wrapper"
      style={{
        right: props.show ? '15%' : '-4%',
        opacity: props.show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <h4>Are you sure?</h4>
      </div>
      <div className="modal-body">
        <div>
          <p>Do you really want to delete this review?</p>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>
          Cancel
        </button>
        <button className="btn-delete" onClick={props.handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;

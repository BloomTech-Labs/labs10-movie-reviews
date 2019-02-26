import React from 'react';
import './premium.css';
import PayButton from "./PayButton";

const premiumCard = (props) => {

  return (
    <div className="card mb-3">
      <div className="card-header">
        {props.header}
      </div>

      <div className="card-body">
        <h5 className="card-title text-success">{props.priceTitle}</h5>
        <p className="card-text">{props.description}</p>
        <PayButton header={props.header} />
      </div>
    </div>
  )
}

export default premiumCard;
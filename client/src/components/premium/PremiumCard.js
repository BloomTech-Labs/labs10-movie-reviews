import React from 'react';
import './premium.css';
import PayButton from './PayButton';

const premiumCard = props => {
  // console.log('props current sub', props.currentSub);
  return (
    <div
      className={`
        card 
        mb-3 
        rounded
        bg-white
      `}
    >
      {/* <div className="card-header bg-dark text-white">{props.header}</div> */}

      <div className="card-body bg-light">
        <h3 className="card-title">
          <span
            className={`
              badge 
              ${
                props.currentSub === 'Yearly' 
                ? 'badge-info text-white' 
                : 'badge-light'
              }
              ${
                props.currentSub === 'Monthly'
                  ? 'badge-info text-white'
                  : 'badge-light'
              }
            `}
          >
            {props.priceTitle} 
            {props.totalCents === 999 ? " /year" : " /month"}
          </span>
          {/* <span className="badge badge-light">/ year</span> */}
        </h3>
        <p className="card-text text-secondary">
          As a premium member, you can write reviews on any movie,
          rate each film on a five-star scale,
          and keep a diary of the movies you have seen.
        </p>
        {props.displayNone ? null : (
          <PayButton
            header={props.header}
            totalCents={props.totalCents}
            currentUser={props.currentUser}
            onCompleteSuccessfulPayment={props.onCompleteSuccessfulPayment}
            handleClick={props.handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default premiumCard;

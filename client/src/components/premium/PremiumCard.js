import React from 'react';
import './premium.css';
import PayButton from './PayButton';

const premiumCard = props => {
  console.log('props current sub', props.currentSub);
  return (
    <div
      className={`
        card 
        mb-3 
        rounded
        bg-white
      `}
    >
      <div className="card-header bg-dark text-white">{props.header}</div>

      <div className="card-body bg-light">
        <h3 className="card-title text-success">
          <span
            className={`
              badge 
              ${
                props.currentSub === 'Yearly' 
                ? 'badge-info' 
                : 'badge-secondary'
              }
              ${
                props.currentSub === 'Monthly'
                  ? 'badge-info'
                  : 'badge-secondary'
              }
            `}
          >
            {props.priceTitle}
          </span>
        </h3>
        <p className="card-text text-dark">{props.description}</p>
        {props.displayNone ? null : (
          <PayButton
            header={props.header}
            totalCents={props.totalCents}
            currentUser={props.currentUser}
            onCompleteSuccessfulPayment={props.onCompleteSuccessfulPayment}
          />
        )}
      </div>
    </div>
  );
};

export default premiumCard;

import React from 'react';
import './premium.css';
import PayButton from "./PayButton";

const PremiumView = () => {

  const subInfo = {
    oneYear: {
      header: "Year Subscription",
      priceTitle: "$9.99",
      totalCents: 999,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Buy Now",
    },
    oneMonth: {
      header: "Month Subscription",
      priceTitle: "$0.99",
      totalCents: 99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Buy Now",
    },
  }
    
  return (
    <div className="container">
      <h1 className="display-4 main-title pt-3 mb-4">Subscriptions</h1>
      <div className="row">

        <div className="col-sm-6">
          <div className="card mb-3">

            <div className="card-header">
              {subInfo.oneYear.header}
            </div>

            <div className="card-body">
              <h5 className="card-title text-success">{subInfo.oneYear.priceTitle}</h5>
              <p className="card-text">{subInfo.oneYear.description}</p>
              <PayButton
                header={subInfo.oneYear.header}
                priceTitle={subInfo.oneYear.priceTitle}
                totalCents={subInfo.oneYear.totalCents}
                buttonText={subInfo.oneYear.buttonText}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card mb-3">

            <div className="card-header">
              {subInfo.oneMonth.header}
            </div>

            <div className="card-body">
              <h5 className="card-title text-success">{subInfo.oneMonth.priceTitle}</h5>
              <p className="card-text">{subInfo.oneMonth.description}</p>
              <PayButton 
                header={subInfo.oneMonth.header}
                priceTitle={subInfo.oneMonth.priceTitle}
                totalCents={subInfo.oneMonth.totalCents}
                buttonText={subInfo.oneMonth.buttonText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumView;
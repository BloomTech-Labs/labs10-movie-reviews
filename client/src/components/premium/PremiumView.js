import React from 'react';
import './premium.css';
import PremiumCard from './PremiumCard';

const PremiumView = () => {    
  return (
    <div className="container">
      <h1 className="display-4 main-title pt-3 mb-4">Subscriptions</h1>
      <div className="row">

        <div className="col-sm-6">
          <PremiumCard 
            header={"Yearly Subscription"}
            priceTitle={"$9.99"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
        </div>

        <div className="col-sm-6">
          <PremiumCard 
            header={"Monthly Subscription"}
            priceTitle={"$0.99"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
        </div>

      </div>
    </div>
  )
}

export default PremiumView;
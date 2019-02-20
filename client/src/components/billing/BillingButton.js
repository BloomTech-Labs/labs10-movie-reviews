import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const BillingButton = props => {
  const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";

  const onToken = token => {
    const body = {
      amount: props.totalCents,
      token: token,
  };
  axios
    .post("http://localhost:8000/payment", body)
    .then(response => {
      console.log(response);
      alert("Payment Success");
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
  };
  return (
    <StripeCheckout
      label={props.buttonText} //Component button text
      name={props.header} //Modal Header
      description={props.priceTitle}
      panelLabel="Submit Payment" //Submit button in modal
      amount={props.totalCents} //Amount in cents 
      token={onToken}
      stripeKey={publishableKey}
      // image="https://www.vidhub.co" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default BillingButton;
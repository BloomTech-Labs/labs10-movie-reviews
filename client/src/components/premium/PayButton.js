import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PayButton = props => {
  const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";

  function onToken(token) {
    console.log("token", token)
    const body = {
      amount: props.totalCents,
      token: token,
  };

  axios
    .post("http://localhost:8000", body)
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("Payment Error: ", error);
    });
  };

  return (
    <StripeCheckout
      label={props.buttonText} //Component button text
      name={props.header} //Modal Header
      description={props.priceTitle}
      panelLabel="Submit Payment" //Submit button in modal
      amount={props.totalCents} //Amount in cents 
      token={res => onToken(res)}
      stripeKey={publishableKey}
      // image="" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default PayButton;
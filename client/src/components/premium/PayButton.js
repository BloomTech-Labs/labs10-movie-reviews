import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PayButton = props => {
  const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";

  // Ontoken sends information about the card to Stripe.
  // Then it receives a token object that contains details about the transaction.
  // (card type, last 4 digit It returns a token object from Stripe which
  // contains information about the transaction (card type, last 4 digits, email, ect)s, email, ect)
  const onToken = token => {
    console.log("token", token)
    console.log("props.header", props.header)
    // the body object contains our token from Stripe, 
    // the total amount of cents, and the props that specify 
    // the type of subscription, yearly or monthly
    const body = {
      amount: props.totalCents,
      token: token,
      plan: props.header,
  };

  // we send the body object to our backend with an axios request.
  // Our backend will then create a new customer and a new subscription.
  axios
    .post("http://localhost:5000/api/payment", body)
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("Payment Error: ", error);
    });
  };

  return (
    <StripeCheckout // component comes from react-stripe-checkout package
      yearly={props.header}
      label={props.buttonText} //Component button text
      name={props.header} //Modal Header
      description={props.priceTitle}
      panelLabel="Submit Payment" //Submit button in modal
      amount={props.totalCents} //Amount in cents 

      // ontoken is invoked here.
      token={res => onToken(res)} 
      stripeKey={publishableKey}
      // image="" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default PayButton;
import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { currentUser } from '../../services/currentUserURLs';
import axios from "axios";

class PayButton extends Component {
  // const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";
  constructor(props) {
    super(props);
    this.state = {
      publishableKey: 'pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF',
      name: '',
      email: '',
      username: '',
      stripeId: '',
    }
  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      console.log("res.data \n", res.data)
      this.setState({
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        username: res.data.username,
      });
    }
  }

  onToken = token => {
    console.log("token", token)
    const body = {
      amount: this.props.totalCents,
      token: token,
      subscription: this.props.header,
    };

    axios
      .post("http://localhost:5000/api/payment", body)
      .then(stripeRes => {
        console.log("response", stripeRes.data.stripeId);
        // this.setState({
        //   stripeId: stripeRes.data.stripeId
        // })
        axios
          .put(`http://localhost:5000/api/users/1`, {
            name: this.state.name,
            email: this.state.email,
            // username: this.state.username,
            stripeId: stripeRes.data.stripeId
          })
          .catch(err => console.log("err \n", err))
      })
      .catch(error => {
        console.log("Payment Error: ", error);
      });
  };

  render() {
    console.log('this state', this.state)
    return (
      this.props.header === "Yearly Subscription" ? (
        <StripeCheckout
          label={"Pay Now"} //Component button text
          name={"Yearly Subscription"} //Modal Header
          description={"$9.99"}
          panelLabel="Submit Payment" //Submit button in modal
          amount={999} //Amount in cents
          token={res => this.onToken(res)}
          stripeKey={this.state.publishableKey}
          // image="" //Pop-in header image
          billingAddress={false}
        />
      ) : (
        <StripeCheckout
          label={"Pay Now"} //Component button text
          name={"Monthly Subscription"} //Modal Header
          description={"$0.99"}
          panelLabel="Submit Payment" //Submit button in modal
          amount={99} //Amount in cents
          token={res => this.onToken(res)}
          stripeKey={this.state.publishableKey}
          // image="" //Pop-in header image
          billingAddress={false}
        />
      )
    );
  };
};

export default PayButton;

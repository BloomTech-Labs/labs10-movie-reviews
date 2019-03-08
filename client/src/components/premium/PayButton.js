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
      id: null,
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
      // console.log("res.data \n", res.data)
      this.setState({
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        username: res.data.username
      });
    }
  };

  onToken = async token => {
    const { id, name, email } = this.props.currentUser;

    console.log('token', token);
    const body = {
      amount: this.props.totalCents,
      token: token,
      subscription: this.props.header
    };

    const paymentRes = await axios.post(
      'http://localhost:5000/api/payment',
      // 'http://localhost:5000/api/payment',
      body
    );

    if (!paymentRes.data) {
      console.log('No payment response data');
      return;
    }

    if (!paymentRes.data.createdCustomer) {
      console.log(' Cannot create customer');
      return;
    }

    if (!paymentRes.data.createdSubscription) {
      console.log(' Cannot create subscription');
      return;
    }
    // update the user stripeId

    axios
      .put(
        `http://localhost:5000/api/users/${id}`,
        // .put(`http://localhost:5000/api/users/${id}`,
        {
          name,
          email,
          stripeId: paymentRes.data.stripeId
        }
      )
      .then(response => console.log('put response', response))
      .catch(err => console.log('err \n', err));

    // call PaymentView to re-render
    // redirect user /invoice
  };

  render() {
    // console.log('this state', this.state)
    return this.props.header === 'Yearly Subscription' ? (
      <StripeCheckout
        label={'Pay Now'} //Component button text
        name={'Yearly Subscription'} //Modal Header
        description={'$9.99'}
        panelLabel="Submit Payment" //Submit button in modal
        amount={999} //Amount in cents
        token={res => this.onToken(res)}
        stripeKey={this.state.publishableKey}
        // image="" //Pop-in header image
        billingAddress={false}
      >
        <button type="button" className="btn btn-outline-dark my-2">
          <span className="">{this.state.subType} Subscribe Yearly</span>
        </button>
      </StripeCheckout>
    ) : (
      <StripeCheckout
        label={'Pay Now'} //Component button text
        name={'Monthly Subscription'} //Modal Header
        description={'$0.99'}
        panelLabel="Submit Payment" //Submit button in modal
        amount={99} //Amount in cents
        token={res => this.onToken(res)}
        stripeKey={this.state.publishableKey}
        // image="" //Pop-in header image
        billingAddress={false}
      >
        <button type="button" className="btn btn-outline-dark my-2">
          <span className="">{this.state.subType} Subscribe Monthly</span>
        </button>
      </StripeCheckout>
    );
  }
}

export default PayButton;

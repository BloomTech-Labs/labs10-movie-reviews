import React, { Component } from 'react';
import './premium.css';
import PremiumCard from './PremiumCard';
import axios from 'axios';
import { currentUser, users } from '../../services/userURLs';
import { placeholderUrl } from '../../services/resourceURLs';
import { customerDelete, customerPlan } from '../../services/paymentURLs';

class PremiumView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: '',
      name: '',
      photo: '',
      stripeId: '',
      premium: false,
      subType: ''
    };
  }

  componentDidMount = async () => {
    // check if user already logging in or not
    const userRes = await axios.get(currentUser, {
      withCredentials: true
    });

    if (!userRes.data) {
      console.log(userRes.error);
      return;
    }

    const { id, photo, email, name, stripeId } = userRes.data;
    console.log(userRes.data);
    if (!stripeId) {
      console.log('I have not subscribed yet');
      this.setState({ id, photo, email, name });
    } else {
      this.handleLoadSubType(stripeId, userRes.data);
    }
  };

  handleCompleteSuccessfulPayment = stripeId => {
    const { id, photo, email, name } = this.state;
    this.handleLoadSubType(stripeId, { id, photo, email, name });
  };

  handleLoadSubType = (stripeId, currentUser) => {
    axios
      .post(customerPlan, {
        stripeId
      })
      .then(planRes => {
        if (planRes.data.premium) {
          this.setState({
            ...currentUser,
            stripeId,
            premium: planRes.data.customer.active,
            subType: planRes.data.customer.nickname
          });
        }
      })
      .catch(error => {
        this.setState({
          ...currentUser,
          stripeId: null,
          premium: false,
          subType: ''
        });
      });
  };

  handleCancel = async id => {
    const updateUserStripeIdRes = await axios.put(`${users}/${id}`, {
      stripeId: ''
    });

    if (updateUserStripeIdRes.status === 200) {
      const cancellationRes = await axios.post(customerDelete, {
        stripeid: this.state.stripeId
      });

      if (cancellationRes.data.deleted) {
        this.setState({
          premium: false,
          subType: '',
          stripeId: ''
        });
      }
    }
  };

  render() {
    console.log('this state', this.state);
    return (
      <div className="container pt-5 bg-custom">
        <div className="row">
          <div className="col-md-4">
            <div className="placeholder">
              <a href={`${placeholderUrl}`}>
                <img
                  className="myreviews-avatar img-responsive mb-3"
                  src={this.state.photo}
                  alt="avatar"
                />
              </a>

              <ul className="list-group list-group-flush text-left">
                <li className="pl-5 bg-custom border-none">
                  <span className="small badge badge-light mr-1">Status: </span>
                  <span>
                    {this.state.premium ? (
                      <h3 className="badge badge-info">Premium</h3>
                    ) : (
                      <h3 className="badge badge-info">Standard</h3>
                    )}
                  </span>
                </li>

                <li className="pl-5 mt-3 bg-custom">
                  <span className="small badge badge-light mr-1">Name: </span>
                  <span className="badge badge-dark">{this.state.name}</span>
                </li>

                <li className="pl-5 mt-3 bg-custom">
                  <span className="small badge badge-light mr-1"> Email: </span>
                  <span className="badge badge-dark">{this.state.email}</span>
                </li>

                {this.state.premium ? (
                  <>
                    <li className="pl-5 mt-3 bg-custom">
                      <span className="small badge badge-light mr-1">
                        Subscription:{' '}
                      </span>
                      <span className="badge badge-dark">
                        {this.state.subType}
                      </span>
                    </li>

                    <li className="pl-5 mt-3 bg-custom">
                      <span className="small badge badge-light mr-1">
                        Billing Amount:{' '}
                      </span>
                      <span className="badge badge-dark">
                        {this.state.subType === 'Yearly' ? '$9.99' : '$0.99'}
                      </span>
                    </li>

                    <li className="pl-5 mt-3 bg-custom">
                      <button
                        type="button"
                        className="btn btn-small text-danger text-left pl-1"
                        onClick={() => this.handleCancel(this.state.id)}
                      >
                        <span className="small">
                          Cancel {this.state.subType} Subscription
                        </span>
                      </button>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </div>

          <div className="col-md-8 mb-5">
            {!this.state.premium ? (
              <h1 className="font-weight-light mb-5">Premium Subscriptions</h1>
            ) : this.state.subType === 'Yearly' ? (
              <h2 className="font-weight-light mb-5 text-center">
                Yearly Premium
              </h2>
            ) : (
              <h2 className="font-weight-light mb-5 text-center">
                Monthly Premium
              </h2>
            )}

            <div className="row">
              {!this.state.premium ? (
                <>
                  <div className="col-md-6">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={999}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={99}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                    />
                  </div>
                </>
              ) : this.state.subType === 'Yearly' ? (
                <>
                  <div className="col-md-6">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={999}
                      displayNone="displayNone"
                      currentSub="Yearly"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={99}
                      displayNone="displayNone"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={999}
                      displayNone="displayNone"
                      premium={this.state.premium}
                      currentUser={this.state}
                    />
                  </div>

                  <div className="col-md-6">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }
                      totalCents={99}
                      displayNone="displayNone"
                      currentSub="Monthly"
                      premium={this.state.premium}
                      currentUser={this.state}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PremiumView;

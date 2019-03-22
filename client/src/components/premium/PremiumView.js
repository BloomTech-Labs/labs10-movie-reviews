import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
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
      subType: '',
      loggedIn: false,
      paymentSuccess: false,
      loading: false,
    };
  }

  componentDidMount = () => {
    // check if user already logging in or not
    axios.get(currentUser, {
      withCredentials: true
    })
    .then(currentUserRes => {
      // console.log('userRes', currentUserRes)
      if (!currentUserRes.data) {
        // console.log("currentUserError",currentUserRes.error);
        this.setState({
          loggedIn: false
        })
        return;
      }

      if (currentUserRes.data) {
        const { id, photo, email, name } = currentUserRes.data;
        axios
          .get(`${users}/${currentUserRes.data.id}`)
          .then(userRes => {
            const stripeId = userRes.data.stripeId ? userRes.data.stripeId : '';

            if (!stripeId) {
              this.setState({ id, photo, email, name, loggedIn: true });
              return;
            } 
    
            if (stripeId) {
              this.handleLoadSubType(stripeId, userRes.data, { loggedIn: true });
              return;
            }
          })
      }
    })
    .catch(error => {
      console.log('error', error)
      return;
    })

  };

  handleCompleteSuccessfulPayment = stripeId => {
    const { id, photo, email, name } = this.state;
    this.handleLoadSubType(stripeId, { id, photo, email, name }, {loggedIn: true, paymentSuccess: true, loading: false});
  };

  handleLoadSubType = (stripeId, currentUser, options) => {
    axios
      .post(customerPlan, {
        stripeId
      })
      .then(planRes => {
        if (planRes.data.premium) {
          this.setState({
            ...currentUser,
            ...options,
            stripeId,
            premium: planRes.data.customer.active,
            subType: planRes.data.customer.nickname,
          });
        }
      })
      .catch(error => {
        this.setState({
          ...currentUser,
          stripeId: null,
          premium: false,
          subType: '',
          paymentSuccess: false,
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
      // console.log('cancellationRes', cancellationRes)
      if (cancellationRes.data.deleted) {
        this.setState({
          premium: false,
          subType: '',
          stripeId: '',
          loggedIn: true,
          paymentSuccess: false,
        });
      }
    }
  };

  handleLoading = () => {
    // console.log('loading is true');
    this.setState({ loading: true })
  }

  render() {
    // console.log('this state\n', this.state);
    // console.log('currentUser\n', currentUser);
    return (
      <div className="container bg-custom top-padding">
        <div className="row">

        {/* Start of left Google Col */}
          <div className="col-md-4">
            { this.state.loggedIn ? (
            <div className="placeholder">
              <a href={`${placeholderUrl}`}>
                <img
                  className="premium-avatar img-responsive mb-3"
                  src={this.state.photo}
                  alt="avatar"
                />
              </a>

              <ul className="list-group">
                <li className="bg-custom border-none">
                  <h5>
                  <span className="badge badge-light">Status:</span>
                  <span>
                    {this.state.premium ? (
                      <h3 className="badge badge-info">Premium</h3>
                    ) : (
                      <h3 className="badge badge-secondary">Standard</h3>
                    )}
                  </span>
                  </h5>
                </li>

                <li className="bg-custom">
                  <h5>
                  <span className="badge badge-light">Name:</span>
                  <span className="badge badge-light">{this.state.name}</span>
                  </h5>
                </li>

                {/* <li className="mt-3 bg-custom">
                  <span className="small badge badge-light mr-1">Email:</span>
                  <span className="badge badge-light">{this.state.email}</span>
                </li> */}

                {this.state.premium ? (
                  <>
                    <li className="bg-custom">
                      <h5>
                      <span className="badge badge-light">
                        Subscription:{''}
                      </span>
                      <span className="badge badge-light">
                        {this.state.subType}
                      </span>
                      </h5>
                    </li>

                    <li className="bg-custom">
                      <h5>
                      <span className="badge badge-light">
                        Billing Amount:{''}
                      </span>
                      <span className="badge badge-light">
                        {this.state.subType === 'Yearly' ? '$9.99' : '$0.99'}
                      </span>
                      </h5>
                    </li>

                    <li className="bg-custom">
                      <button
                        type="button"
                        className="btn btn-small text-danger text-left delete-button"
                        onClick={() => this.handleCancel(this.state.id)}
                      >
                        <span className="small">
                          <p>Cancel Subscription</p>
                        </span>
                      </button>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
            ) : (
              <h5>Please Log In To Become a Premium Member</h5>
            )}
          </div>
          {/* end of left Google Col */}

          <div className="col-md-8 mb-5">
            {this.state.paymentSuccess 
              ? <h5 className="my-2 mx-2 py-3 pl-0 text-success text-left">Payment Successfully Processed</h5> 
              : this.state.loading 
                ? <h5 className="my-2 mx-2 py-3 pl-0 text-secondary text-left"><Spinner color="primary" /> Processing Payment</h5>
                : null
            }
            
            {!this.state.premium ? (
              <h4 className="font-weight-light">Premium Subscriptions</h4>
            ) : this.state.subType === 'Yearly' ? (
              <h4 className="font-weight-light text-center">
                Yearly Premium
              </h4>
            ) : (
              <h4 className="font-weight-light text-center">
                Monthly Premium
              </h4>
            )}

            <div className="row">
              {!this.state.premium ? (
                <>
                  <div className="col-lg-6">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={999}
                      currentUser={this.state}
                      displayNone={!this.state.loggedIn}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
                    />
                  </div>

                  <div className="col-lg-6">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={99}
                      currentUser={this.state}
                      displayNone={!this.state.loggedIn}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
                    />
                  </div>
                </>
              ) : this.state.subType === 'Yearly' ? (
                <>
                  <div className="col-lg-6">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={999}
                      displayNone="displayNone"
                      currentSub="Yearly"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
                    />
                  </div>

                  <div className="col-lg-6">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={99}
                      displayNone="displayNone"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6 subscribed">
                    <PremiumCard
                      header={'Yearly Subscription'}
                      priceTitle={'$9.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={999}
                      displayNone="displayNone"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
                    />
                  </div>

                  <div className="col-lg-6 subscribed">
                    <PremiumCard
                      header={'Monthly Subscription'}
                      priceTitle={'$0.99'}
                      description={
                        'Enjoy the benefits of being a Premium Member.Write reviews on any movie from A Trip To The Moon to your box office favorite. Rate each film on a five-star scale to record and share your reaction. Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!'
                      }
                      totalCents={99}
                      displayNone="displayNone"
                      currentSub="Monthly"
                      premium={this.state.premium}
                      currentUser={this.state}
                      onCompleteSuccessfulPayment={
                        this.handleCompleteSuccessfulPayment
                      }
                      loading={this.handleLoading}
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

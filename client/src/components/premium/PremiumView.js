import React, { Component } from 'react';
import './premium.css';
import PremiumCard from './PremiumCard';
import axios from 'axios';
import { currentUser } from '../../services/currentUserURLs';

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
    }
  }

  componentWillMount = async () => {
    const userRes = await axios.get(currentUser, {
      withCredentials: true
    });
    if (userRes.data) {
      console.log("userRes \n", userRes.data)
      axios
        .get(`https://labs10-movie-reviews.herokuapp.com/api/users/${userRes.data.id}`)
        // .get(`http://localhost:5000/api/users/${userRes.data.id}`)
        .then(getRes => {
          console.log("getRes \n", getRes.data)
          const requestOptions = {
            headers: { stripeid: getRes.data.stripeId },
          }
          axios
            .get('https://labs10-movie-reviews.herokuapp.com/api/customer/plan', requestOptions)
            // .get('http://localhost:5000/api/customer/plan', requestOptions)
            .then(planRes => {
              console.log("planRes \n", planRes.data)
              if (planRes.data.premium === false) {
                this.setState({
                  id: getRes.data.id,
                  photo: getRes.data.photo,
                  email: getRes.data.email,
                  name: getRes.data.name,
                  stripeId: getRes.data.stripeId,
                  premium: false,
                })
              } else {
                this.setState({
                  id: getRes.data.id,
                  photo: getRes.data.photo,
                  email: getRes.data.email,
                  name: getRes.data.name,
                  stripeId: getRes.data.stripeId,
                  premium: planRes.data.customer.active,
                  subType: planRes.data.customer.nickname,
                })
              }
            })        
        })
    }
  }

  handleCancel = id => {
    const requestOptions = {
      headers: { stripeid: this.state.stripeId }
    }
    axios
      .get('https://labs10-movie-reviews.herokuapp.com/api/customer/delete', requestOptions)
      // .get('http://localhost:5000/api/customer/delete', requestOptions)
      .then(delRes => {
        console.log(delRes);
        window.location.reload();
      })
  }
  
  render() {
    console.log('this state', this.state);
    return (
      <div className="container pt-5 bg-white">
        <div className="row">

          <div className="col-md-4">
            <div className="placeholder">
              <a href="https://placeholder.com">
                <img
                  className="myreviews-avatar img-responsive mb-3"
                  src={this.state.photo}
                  alt="avatar"
                />
              </a>

              <ul className="list-group list-group-flush text-left">
                <li className="list-group-item pl-5 bg-white border-info"><span className="small badge badge-light mr-1">Status: </span>
                  <span>
                    {this.state.premium ? (
                      <h3 className="badge badge-info">Premium</h3>
                    ) : (
                      <h3 className="badge badge-info">Standard</h3>
                    )}
                  </span>
                </li>

                <li className="list-group-item pl-5 bg-white"><span className="small badge badge-light mr-1">Name: </span>
                    <span className="badge badge-dark">{this.state.name}</span>
                </li>

                <li className="list-group-item pl-5 bg-white"><span className="small badge badge-light mr-1"> Email: </span>
                  <span className="badge badge-dark">{this.state.email}</span>
                </li>

                {this.state.premium ?
                  <> 
                    <li className="list-group-item pl-5 bg-white"><span className="small badge badge-light mr-1">Subscription: </span>
                      <span className="badge badge-dark">{this.state.subType}</span>
                    </li>

                    <li className="list-group-item pl-5 bg-white"><span className="small badge badge-light mr-1">Billing Amount: </span>
                      <span className="badge badge-dark">{this.state.subType === 'Yearly' ? '$9.99' : '$0.99'}</span>
                    </li>

                    <li className="list-group-item pl-5 bg-white">
                      <button 
                        type="button" 
                        className="btn btn-small text-danger text-left pl-1"
                        onClick={() => this.handleCancel(this.state.id)}
                      >
                        <span className="small">Cancel {this.state.subType} Subscription</span>
                      </button>
                    </li>
                  </>
                : null}
              </ul>
              
            </div>
          </div>
          
          <div className="col-md-8 mb-5">
            {!this.state.premium 
              ? <h1 className="font-weight-light mb-5">Premium Subscriptions</h1>
              : this.state.subType === 'Yearly'
                ? <h2 className="font-weight-light mb-5 text-center">Yearly Premium</h2>
                : <h2 className="font-weight-light mb-5 text-center">Monthly Premium</h2>
            }

            <div className="row">
              {!this.state.premium ? (
                <> 
                  <div className="col-md-6">
                    <PremiumCard 
                      header={"Yearly Subscription"}
                      priceTitle={"$9.99"} 
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      totalCents={999}
                    />
                  </div>
          
                  <div className="col-md-6">
                    <PremiumCard 
                      header={"Monthly Subscription"}
                      priceTitle={"$0.99"} 
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      totalCents={99}
                    />
                  </div> 
                </>
              ) : (
                this.state.subType === 'Yearly' ? (
                  <>
                    <div className="col-md-6">
                      <PremiumCard 
                        header={"Yearly Subscription"}
                        priceTitle={"$9.99"} 
                        description={"TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        totalCents={999}
                        displayNone='displayNone'
                        currentSub="Yearly"
                        premium={this.state.premium}
                      />
                    </div>

                    <div className="col-md-6">
                      <PremiumCard 
                        header={"Monthly Subscription"}
                        priceTitle={"$0.99"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        totalCents={99}
                        displayNone='displayNone'
                        premium={this.state.premium}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6">
                      <PremiumCard 
                        header={"Yearly Subscription"}
                        priceTitle={"$9.99"} 
                        description={"TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        totalCents={999}
                        displayNone='displayNone'
                        premium={this.state.premium}
                      />
                    </div>

                    <div className="col-md-6">
                      <PremiumCard 
                        header={"Monthly Subscription"}
                        priceTitle={"$0.99"} 
                        description={"TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        totalCents={99}
                        displayNone='displayNone'
                        currentSub="Monthly"
                        premium={this.state.premium}
                      />
                    </div>
                  </>
                )
              )}

            </div>
          </div>
  
        </div>
      </div>
    )
  }  
}

export default PremiumView;
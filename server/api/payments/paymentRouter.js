const stripeKey = require("../../config/keys");
const stripe = require("stripe")(stripeKey.stripeSecretKey);
const router = require('express').Router();

// First, we create our customer. we use the stripe API will return a customer
// object. The only thing we pass in the the create function is the email and
// the source(the stripe token)

// Secondly, subscribe the customer to a newly created subscription. 
// Our subscription's settings are already set up in the Stripe dashboard.
// All we need to provide here is the customer ID and the type of sub.
// There are 2 types of subs, 1 year and 1 month sub.

router.post('/payment/', function(req, res) {
  // we gather information from the request from our React app.
  const source = req.body.token.id; // stripe token created in the react app
  const { email } = req.body.token; // the customer's email
  let { plan } = req.body.plan; // the type of plan. either one year subscription or a one month subscription
  // This plan is a string was passed from the PremiumView component to the PayButton component. Then
  // it was passed here in the request object. It is a string. "Yearly Subscription" or "Monthly Subscription"

  plan = plan === "Yearly Subscription" 
    ? 'plan_EaodMeOqIEB5H1' // id that represents 1 year subscription
    : 'plan_EaqdBYrYWZb7IV'; // id that represents 1 month subscription

  stripe
    .customers
    .create({ email , source }, (err, customer) => { // the first argument creates our new customer
      console.log("customer\n", customer);

      err 
        ? res.send({ createdCustomer: false }) // if there's an error in creating our customer
        : stripe // Successfully created customer. Now we can create a sub for our customer
          .subscriptions
          .create({ 
            customer: customer.id, 
            items: [{ plan }] // the value of plan is the id of the plan
          }, err => {
            err
              ? res.send({ createdSubscription: false })
              : res.send({ createdSubscription: true })
          });
      })
})

  // Leaving these payments for future use
  //! Payment method 2
  //   stripe.charges.create({
  //     amount: req.body.amount,
  //     currency: "usd",
  //     description: "Example charge",
  //     source: stripeToken,
  //   }, function(err, charge) {
  //     console.log('charge')
  //     console.log(charge);
  //     if (err) {
  //       res.send({
  //         success: false,
  //         message: 'Error'
  //       });
  //     } else {
  //       res.send({
  //         success: true,
  //         message: 'Success'
  //       });
  //     }
  //   })
  // })

  //! Payment method 1
  // const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  //   if (stripeErr) {
  //     res.status(500).send({ error: stripeErr });
  //   } else {
  //     res.status(200).send({ success: stripeRes });
  //   }
  // };
  
  // const paymentApi = app => {  
  //   router.post("/payment", (req, res) => {
  //     const body = {
  //       source: req.body.token.id,
  //       amount: req.body.amount,
  //       currency: "usd"
  //     };
  //     stripe
  //       .charges
  //       .create(body, stripeChargeCallback(res))
  //       .then(response => console.log("response", response))
  //       .catch(err => console.log(err));
  //   });
  //     return app;
  // };

module.exports = router;
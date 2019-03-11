const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = require('express').Router();

// First, we create our customer. we use the stripe API will return a customer
// object. The only thing we pass in the the create function is the email and
// the source(the stripe token)

// Second, subscribe the customer to a newly created subscription.
// Our subscription's settings are already set up in the Stripe dashboard.
// All we need to provide here is the customer ID and the type of sub

router.post('/payment', function(req, res) {
  // we gather information from the request body of our React app.
  const source = req.body.token.id; // stripe token created in the react app
  const { email } = req.body.token; // the customer's email
  const { subscription } = req.body;
  let plan;
  // console.log("req.body", req.body);

  // the type of plan. either one year subscription or a one month subscription
  // This plan is a string was passed from the PremiumView component to the PayButton component. Then
  // it was passed here in the request object. It is a string. "Yearly Subscription" or "Monthly Subscription"
  subscription == 'Yearly Subscription'
    ? (plan = 'plan_EaodMeOqIEB5H1') // id that represents 1 year subscription
    : (plan = 'plan_EaqdBYrYWZb7IV'); // id that represents 1 month subscription

  stripe.customers.create({ email, source }, (err, customer) => {
    // the first argument creates our new customer
    err
      ? res.send({ createdCustomer: false }) // if there's an error in creating our customer
      : stripe.subscriptions // Successfully created customer. Now we can create a sub for our customer
          .create(
            {
              customer: customer.id,
              items: [{ plan }] // the value of plan is the id of the plan
            },
            (err, subscription) => {
              // console.log('subscription \n', su`bscription);
              err
                ? res.send({ createdSubscription: false })
                : res.send({
                    createdCustomer: true,
                    createdSubscription: true,
                    stripeId: customer.id
                  });
            }
          );
  });
});

// Gets customer's plan using using stripeId
router.post('/customer/plan', function(req, res) {
  // console.log("customer req \n", req.headers);
  const { stripeId } = req.body;

  stripe.customers.retrieve(stripeId, function(error, customer) {
    if (error) {
      return res.status(500).send({ error });
    }

    if (customer) {
      if (customer.deleted) {
        return res.status(404).send({
          message: 'No subscription found',
          premium: false
        });
      }
      // console.log("customer plan \n", customer)
      return res.status(200).send({
        customer: customer.subscriptions.data[0].items.data[0].plan,
        premium: true
      });
    }
    return res.status(404).send({ error: 'Cannot find customer' });
  });
});

// Gets customer's status; "premium: true" if customer has active subscription
router.post('/customer/premium', function(req, res) {
  // console.log("customer req \n", req.headers);
  const { stripeid } = req.body;
  if (!stripeid) {
    res.status(400).send({
      error: 'Missing stripe Id'
    });
  }
  stripe.customers.retrieve(stripeid, function(err, customer) {
    if (error) {
      return res.status(500).send({ error });
    }

    if (customer) {
      if (customer.deleted) {
        res.send({ premium: false });
        return;
      } else if (err) {
        res.send({
          error: 'Unable to get customer'
        });
      } else {
        // console.log("customer plan/n", customer)
        res.send({
          premium: customer.subscriptions.data[0].items.data[0].plan.active
        });
      }
    }

    return res.status(404).send({ error: 'Cannot find customer' });
  });
});

// Deletes customer from stripe and cancels subscription
router.post('/customer/delete', function(req, res) {
  const { stripeid } = req.body;
  stripe.customers.del(stripeid, function(error, confirmation) {
    if (error) {
      return res.status(500).send({ error });
    }

    return res.status(200).send(confirmation);
  });
});

module.exports = router;

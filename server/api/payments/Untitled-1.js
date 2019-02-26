const stripeKey = require("../../config/keys");
const stripe = require("stripe")(stripeKey.stripeSecretKey);
const router = require('express').Router();

// Handle Subscription and 
router.post('/payment/', function(req, res) {
  const stripeToken = req.body.token.id;
  const { email } = req.body.token;
  // const subscriptionType = subType === "yearly" ? "yearly" : "monthly"
  let { plan } = req.body;
  // plan = plan === "Yearly Subscription" ? 'plan_EaodMeOqIEB5H1' : 'plan_EaqdBYrYWZb7IV';

  req.body.plan === "Yearly Subscription" 
    ? 'plan_EaodMeOqIEB5H1'
    : 'plan_EaqdBYrYWZb7IV';

  stripe.customers.create({
    email: req.body.token.email,
    source: stripeToken,
  }, function(err, customer) {
    console.log("Error\n", err);
    console.log("customer\n", customer);

    // async called
    if (err) {
      res.send({
        success: false,
      });
    } else {
      const { id } = customer;
      stripe.subscriptions.create({
        customer: id,
        items: [
          {
            plan
            // plan: subscriptionType == 'yearly' ? 'plan_EaodMeOqIEB5H1' : 'prod_EaqH58DMsdeEEJ';
          },
        ],
      }, function(err) {
        // async called
        console.log("Error\n", err);
        
        // if there's an error
        if (err) {
          res.send({
            success: false,
          });

        // if successful
        } else {
          res.send({
            success: true,
          });
        }
      });
    }
  });
});
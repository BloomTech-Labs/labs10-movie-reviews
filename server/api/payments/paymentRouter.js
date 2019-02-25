const stripeKey = require("../../config/keys");
const stripe = require("stripe")(stripeKey.stripeSecretKey);
const router = require('express').Router();

// Handle Subscription and 
router.post('/payment/', function(req, res) {
  const stripeToken = req.body.token.id;
  console.log("req.body.token.email", req.body.token.email)
  // const subscriptionType = subType === "yearly" ? "yearly" : "monthly"

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
            plan: 'plan_EaodMeOqIEB5H1',
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
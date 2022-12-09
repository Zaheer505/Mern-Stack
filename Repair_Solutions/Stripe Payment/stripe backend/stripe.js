const router = require("express").Router();
const cors = require("cors")

//secret key, must be in env
KEY = ***you_know_where_to_find_the_secret_key***
const stripe = require("stripe")(KEY)

// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY);


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

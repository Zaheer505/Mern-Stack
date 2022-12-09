const router = require("express").Router();
const cors = require("cors")

//secret key, must be in env
KEY = "sk_test_51MBKaqHLwIldxPu32eA1SJ9aWX4L4lLoox7bZm1EPaDLkmJRLD7Piow65DjBxrUym3oCGiP9Dzj4pWguSuU2j0Bx00jruyepAf"
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

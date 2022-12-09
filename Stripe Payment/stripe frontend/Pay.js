import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY = "pk_test_51MBKaqHLwIldxPu3xLWilOhlaMnVZDRPnjqsBQgP9pVGFb2dQ9lH1oWJ9AKIOeMahzsctA5MGBNV3apKspQL8P2d006g1wqIlT"


const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
      console.log(token);
      setStripeToken(token);
    };
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 2000,
          });
          console.log(res.data)
        } catch {} 
      };
      stripeToken && makeRequest();
    }, [stripeToken]);

return (
    <div
        style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <StripeCheckout
              name="Repair Solutions"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $20`}
              amount={2000}
              token={onToken}
              stripeKey={KEY}
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
        </div>
    )
};

export default Pay;
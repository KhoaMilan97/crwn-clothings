import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/4.1 favicon.ico.ico";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_NUAz3WQqlwYZvRgx8njLklff00fe6YU3Ae";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("succesful payment");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      image={logo}
      stripeKey={publishableKey}
      label="Pay With Card"
      name="CRW clothing"
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;

// https://dashboard.stripe.com/test/apikeys

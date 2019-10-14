import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/4.1 favicon.ico.ico";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_NUAz3WQqlwYZvRgx8njLklff00fe6YU3Ae";

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
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

import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeChechoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51JwRZ7Gu4mQvmeGHFFjPI3fK9SK98bRc8YuHCzfXjlW72P9CKkvAWJl43XWGPe7CDImMvTSrGUddQgVvT0Zn1uqT00vlFhV4WA";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeChechoutButton;

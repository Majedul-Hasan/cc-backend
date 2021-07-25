import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IwUWvKtZw3FA0k5htnB10NixHjHRPvk9EEIbuLFVBsaLrKR17VjA0o1RE1mGaHhxhNzF4OoUKDN7CzYZqNxMkum00VH3IGNZL';
/* client code
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };
  */
 /** backend code */
   const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }

    }).then(response=>{
      alert('Payment Succesful! ');
    }).catch(error=>{
      console.log('payment error', JSON.parse(error));
      alert('ther was a issue with your payment. please sre you use the provided credit card')
    })
     
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({price}) {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KiBweAyRglpBJakxiTNsR1JAfAHLFz3w6OyFiYFzDhwuWfPgXraySJjjosphHLadmTZlFJSCtroEiTD8bnWVREd00bUTUsKBr';

    const onToken = token =>{
        console.log(token);
        alert('Payment successful');
    }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}



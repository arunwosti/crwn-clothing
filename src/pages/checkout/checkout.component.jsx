import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectedCartItems} from '../../redux/cart/cart.selectors'
import { selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const CheckoutPage = ({cartItems, total})=>(
    <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(cartItem =>
           (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)

        )
    }
    <div className='total'>TOTAL : ${total}</div>
    <div className='test-warning '>
        * Please use the following test credit card info for payment *
        <br></br>
        4242 4242 4242 4242 - card number
        <br></br>
        CVV: 123
        date: recent month and year
    </div>
    <StripeCheckoutButton price={total}/>
</div>
);



  const mapStateToProps = createStructuredSelector({
    cartItems: selectedCartItems,
    total: selectCartTotal
});


export default connect (mapStateToProps) (CheckoutPage);

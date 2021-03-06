import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectedCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header=({currentUser, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to={"/"} >
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to={"/shop"}>
                SHOP
            </Link>
            <Link className='option' to={"/contact"}>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to={'/signin'}>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
  );

  const mapStateToProps = createStructuredSelector({
    currentUser: selectedCurrentUser,
    hidden:selectCartHidden
  });


  export default connect(mapStateToProps)(Header);

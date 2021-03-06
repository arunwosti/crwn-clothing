
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Routes} from 'react-router-dom';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in-up.component';

import{auth, createUserProfileDocument} from './firebase/firebase.util'
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import {selectedCurrentUser} from './redux/user/user.selector'



class App extends React.Component{

  

  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            
              id:snapShot.id,
              ...snapShot.data()
            
          })
        });
        console.log(this.state);
      }
      setCurrentUser(userAuth);
    });
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render()
{
  

  return (
    <div >
      <Header />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route path ='/shop' element={<ShopPage/>}/>
        <Route exact path='/checkout' element={<CheckoutPage/>}/>
        <Route  path ='/signin' element={<SignInAndSignUpPage/>} />
      </Routes>
   
    </div>
  );
}
} 

const mapStateToProps = createStructuredSelector({
  currentUser: selectedCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);

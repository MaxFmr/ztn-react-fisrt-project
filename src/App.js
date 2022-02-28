import React from "react";

import HomePage from "./pages/homepage/homepage.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// -----------------------------------------------------------

import Header from "./components/header/header.component";

import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sing-in-and-signup/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import Collection from "./pages/collection/collection.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/:routeName" element={<Collection />} />
            <Route
              exact
              path="/signin"
              element={
                this.props.currentUser ? <HomePage /> : <SignInAndSignUpPage />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

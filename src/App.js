import React from "react";

import HomePage from "./pages/homepage/homepage.component";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

// -----------------------------------------------------------

import Header from "./components/header/header.component";
import JacketsPage from "./pages/jacketspage/jacketspage.component";
import HatsPage from "./pages/hatspage/hatspage.component";
import MensPage from "./pages/menspage/menspage.component";
import SneakersPage from "./pages/sneakerspage/sneakerspage.component";
import WomensPage from "./pages/womenspage/womenspage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sing-in-and-signup/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

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
            <Route exact path="/hats" element={<HatsPage />} />
            <Route exact path="/jackets" element={<JacketsPage />} />
            <Route exact path="/mens" element={<MensPage />} />
            <Route exact path="/sneakers" element={<SneakersPage />} />
            <Route exact path="/womens" element={<WomensPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
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

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

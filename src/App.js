import React from "react";

import HomePage from "./pages/homepage/homepage.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import JacketsPage from "./pages/jacketspage/jacketspage.component";
import HatsPage from "./pages/hatspage/hatspage.component";
import MensPage from "./pages/menspage/menspage.component";
import SneakersPage from "./pages/sneakerspage/sneakerspage.component";
import WomensPage from "./pages/womenspage/womenspage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sing-in-and-signup/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/hats" element={<HatsPage />} />
            <Route exact path="/jackets" element={<JacketsPage />} />
            <Route exact path="/mens" element={<MensPage />} />
            <Route exact path="/sneakers" element={<SneakersPage />} />
            <Route exact path="/womens" element={<WomensPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

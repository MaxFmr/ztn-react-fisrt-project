import React from "react";

import HomePage from "./components/pages/homepage/homepage.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import JacketsPage from "./components/pages/jacketspage/jacketspage.component";
import HatsPage from "./components/pages/hatspage/hatspage.component";
import MensPage from "./components/pages/menspage/menspage.component";
import SneakersPage from "./components/pages/sneakerspage/sneakerspage.component";
import WomensPage from "./components/pages/womenspage/womenspage.component";
import ShopPage from "./components/pages/shoppage/shop.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/hats" element={<HatsPage />} />
            <Route exact path="/jackets" element={<JacketsPage />} />
            <Route exact path="/mens" element={<MensPage />} />
            <Route exact path="/sneakers" element={<SneakersPage />} />
            <Route exact path="/womens" element={<WomensPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

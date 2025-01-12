import React from "react";

import { ProductsPage } from "./screens/productsPage/index";
import { OrdersPage } from "./screens/ordersPage/index";
import { UserPage } from "./screens/userPage/index";
import { HomePage } from "./screens/homePage/index";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { HelpPage } from "./screens/helpPage/index";
import { Footer } from "./components/footer/index";
import "../css/app.css";
import "../css/navbar.css";

import { Switch, Route, Link, useLocation } from "react-router-dom";

function App() {
  const locations = useLocation();
  console.log("locations:", locations);

  return (
    <>
      {locations.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

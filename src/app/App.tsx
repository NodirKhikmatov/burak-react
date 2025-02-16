import React, { useState } from "react";

import ProductsPage from "./screens/productsPage/index";
import OrdersPage from "./screens/ordersPage/index";
import UserPage from "./screens/userPage/index";
import HomePage from "./screens/homePage/index";
import Test from "./screens/Test";

import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import HelpPage from "./screens/helpPage/index";
import Footer from "./components/footer/index";
import useBasket from "./Hooks/useBasket";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

import { Switch, Route, Link, useLocation } from "react-router-dom";

function App() {
  const locations = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  return (
    <>
      {locations.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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

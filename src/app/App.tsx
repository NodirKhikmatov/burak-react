import React from "react";

import { ProductsPage } from "./screens/productsPage/index";
import { OrdersPage } from "./screens/ordersPage/index";
import { UserPage } from "./screens/userPage/index";
import { HomePage } from "./screens/homePage/index";
import "../css/app.css";

import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

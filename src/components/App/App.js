import React, { useState } from "react";
import Home from "../Home/Home";
import Currencies from "../Currencies/Currencies";
import Price from "../Price/Price";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom"; // route to be able to create routes, link to be able to create links

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = (price) => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currency List</Link>
      </nav>
      <main>
        <Switch>
          {/* this prevents 2 routes from loading at the same time */}
          <Route exact path="/" component={Home} />
          {/* when your path is here, render this component. add "exact" when there are problems switching */}
          <Route path="/currencies" component={Currencies} />
          <Route
            path="/price/:currency"
            render={(rp) => (
              <Price handleClick={handleClick} price={price} {...rp} /> // rp = router props. the ellipses (spread operator) breaks apart the objects inside each object into their own individual objects
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;

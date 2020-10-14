import React, { useEffect } from "react";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Price(props) {
  const { match } = props;

  useEffect(() => {
    const currency = match.params.currency;
    const url = `${coindeskURL}${currency}.json`;
    const makeAPICall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      let newPrice = json.bpi[currency].rate;
      props.handleClick(newPrice);
    };
    makeAPICall();
  }, []);

  return (
    <div>
      <h1>Bitcoin price in {match.params.currency} </h1>
      <div className="price">{props.price}</div>
      {/* props.whatever is passing the prop down to that variable in app.js */}
    </div>
  );
}

export default Price;

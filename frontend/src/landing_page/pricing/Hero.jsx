import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investments and flat &#8377;20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-3">
        <div className="col-4 p-5">
          <img src="/media/pricingEquity.svg" alt="" />
          <h1 className="fs-3 text-center">Free equity delivery</h1>
          <p className="text-muted mt-3 text-center">
            All equity delivery investment(NSE,BSE),are absolutely free
            --&#8377; 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/media/intradayTrades.svg" alt="" />
          <h1 className="fs-3 text-center">Intraday and F&O trades</h1>
          <p className="text-muted mt-3 text-center">
          Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
          intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
        <img src="/media/pricingEquity.svg" alt="" />
          <h1 className="fs-3 text-center">Free direct MF</h1>
          <p className="text-muted mt-3 text-center">
          All direct mutual fund investments are absolutely free — ₹ 0
          commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

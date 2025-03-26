import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className=" text-center"> People</h1>
      </div>
      <div
        className="row p-5"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="/media/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6 className="">Founder,CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Team;

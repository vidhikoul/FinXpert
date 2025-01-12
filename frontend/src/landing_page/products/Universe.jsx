import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/media/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small text-center">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"35%"}} src="/media/streakLogo.png" alt="" />
          <p className="text-muted text-small text-center">
            Algo & strategy platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"35%"}} src="/media/sensibullLogo.svg" alt="" />
          <p className="text-muted text-small text-center mt-3">
            Options trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}} src="/media/zerodhaFundhouse.png" alt="" />
          <p className="text-muted text-small text-center mt-3">
            Asset management
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"40%"}} src="/media/goldenpiLogo.png" alt="" />
          <p className="text-muted text-small text-center mt-3">
            bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="pb-2" style={{width:"35%"}} src="/media/dittoLogo.png" alt="" />
          <p className="text-muted text-small text-center mt-2">
            Insurance
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width:"15%",margin:"0 auto" ,}}>Signup Now</button>
      </div>
    </div>
  );
};

export default Universe;

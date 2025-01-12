import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3 ">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for and answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg.how do i activate F&Q,why is my order getting rejected.."
          />
          <br />
          <a className="link"href="">Track account opening</a>
          <a className="link" href="">Track segment activation</a>
          <a className="link" href="">Intraday margins</a>
          <a className="link" href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5 feat">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;

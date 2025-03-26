import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row p-5 text-center">
        <h1>Technology</h1>
        <h4 className="text-muted fs-4 mt-3">
          Sleek,modern and intuitive trading platforms
        </h4>
        <p className="mt-2">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offering{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

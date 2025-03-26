import React from "react";

const RightSection = ({ imageURl, productName, productDes, learnMore }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDes}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              learnMore
            </a>
          </div>
        </div>
        
        <div className="col-6 ">
          <img src={imageURl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;

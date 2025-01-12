import React from "react";

const LeftSection = ({
  imageURl,
  productName,
  productDes,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURl} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDes}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"9rem",textDecoration:"none"}}>learnMore</a>
          </div>

          <div className="mt-4">
            <a href={googlePlay} >
              <img src="/media/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} >
              <img src="/media/appstoreBadge.svg" style={{marginLeft:"4rem"}} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

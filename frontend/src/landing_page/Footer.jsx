import React from "react";

const Footer = () => {
  return (
    <footer style={{backgroundColor:"rgbd(250,250,250)"}}>
      <div className="container border-top mt-5 ">
        <div className="row mt-5 ht-5">
          <div className="col">
            <img src="/media/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024,Not Zerodha Broking Ltd. All rights reserved
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a className="text-muted mb-2" href="#">
              About
            </a>
            <br />
            <br />
            <a className="text-muted" href="#">
              Products
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Pricing
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Referral programme
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Careers
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Zerodha.tech
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Press & media
            </a>
            <br /><br />
            <a className="text-muted" href="#">
              Zerodha cares(CSR)
            </a>
            <br /><br />
          </div>
          <div className="col">
            <p >Support</p>
            <a className="text-muted" href="">
              Contact
            </a>
            <br /><br />
            <a className="text-muted" href="">
              Support portal
            </a>
            <br /><br />
            <a className="text-muted" href="">
              Z-Conect blog
            </a>
            <br /><br />
            <a className="text-muted" href="">
              List of charges
            </a>
            <br />
            <a className="text-muted" href="">
              Download & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a className="text-muted" href="">
              Open and account
            </a>
            <br /><br />
            <a className="text-muted" href="">
              Fund transfer
            </a>
            <br /><br />
            <a className="text-muted" href="">
              60 day challenge
            </a>
            <br /><br />
          </div>
        </div>
        <div className="row">
          <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through Zerodha
              Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
              Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
              Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

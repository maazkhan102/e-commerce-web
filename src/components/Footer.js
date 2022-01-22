import React from "react";
import "./Footer.css";
import fb from "../Images/fb.png";
import li from "../Images/li.png";
import insta from "../Images/insta.png";
import em from "../Images/ei.png";

const Footer = () => {
  return (
    <div>
      <div className="animate">
        {/* <div className={`footerhead  ${show && "moveup"}`}> */}
        <div className="footerhead">
          <div className="footerwrap">
            <h4>Owner & Creator:</h4>
            <span style={{ fontWeight: "700", fontSize: "25px" }}>
              Hassan Ahmed Khan.
            </span>
            <h5>
              Copyright <span className="copyicon">©️</span> 2021 Hassan Ahmed
              Khan | All Rights Reserved.
            </h5>
          </div>
          <div className="socialicons">
            <a href="https://www.facebook.com/theycallmekhan/" alt="FB Icon">
              <img src={fb} className="icon" alt="img" />
            </a>

            <a
              href="https://www.instagram.com/hassanahmedkhann/"
              alt="Insta Icon"
            >
              <img src={insta} className="icon" alt="img" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-ahmed-khan-937210202/"
              alt="LinkedIn Icon"
            >
              <img src={li} className="icon" alt="img" />
            </a>
            <a href="mailto:itshakhere@gmail.com" alt="Email Icon">
              <img src={em} className="icon" alt="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

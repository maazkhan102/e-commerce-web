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
            <h4>Owner & Creators:</h4>
            <span style={{ fontWeight: "700", fontSize: "25px" }}>
              Abbas | Maaz | Ramis | Taha
            </span>
            <h5>
              Copyright <span className="copyicon">©️</span> 2021 Muhammad Maaz Khan | All Rights Reserved.
            </h5>
          </div>
          <div className="socialicons">
            <a href="https://www.facebook.com/muhammad.maazkhan.925" alt="FB Icon">
              <img src={fb} className="icon" alt="img" />
            </a>

            <a
              href="https://www.instagram.com/maazkhan____102/"
              alt="Insta Icon"
            >
              <img src={insta} className="icon" alt="img" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              alt="LinkedIn Icon"
            >
              <img src={li} className="icon" alt="img" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" alt="Email Icon">
              <img src={em} className="icon" alt="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import "./Footer.css";

const footerLinks = [
  ["Quicklinks", "Home", "Teachers", "About Us", "Contact Us"],
  [
    "Contacts",
    "+91 1234567890",
    "info@loremipsum@gmail.com",
    "hdgfhddjks, hsdghjd, gdswedh sdhsdsds- 736432",
  ],
  [
    "Our Policy",
    "Terms and Conditions",
    "Privavy Policy",
    "FAQs",
    "Lorem ipsum",
  ],
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo-sec">
          <div className="logo">
            <p>LOGO</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt... <span>more</span>
          </p>
          <ul className="brands">
            {[<Facebook />, <Twitter />, <Google />, <Instagram />].map(
              (brand, i) => (
                <li key={i} className="list-inline-item">
                  <a href="#">{brand}</a>
                </li>
              )
            )}
          </ul>
        </div>

        {footerLinks.map((links, i) => (
          <div key={i} className="col-lg-3 col-md-6 text-center text-md-left">
            <h3 className="text-uppercase font-weight-bold my-2">{links[0]}</h3>
            <ul className="list-unstyled mb-0">
              {links.map((link, i) => (
                <li key={"l" + i} className="mb-2">
                  <a href="#">{i ? link : ""}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright section */}
      <div style={{ background: "#fff" }}>
        <div className="container copyr">
          <p className="text-muted mb-sm-0 mx-auto mx-sm-0">
            All rights reserved | Company Name 2021
          </p>
          <div className="f-img">
            <img
              className=""
              src="./images/paymentmode.png"
              alt="payment modes"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

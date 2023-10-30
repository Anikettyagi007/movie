import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
         A Web application that enables users to search for any Movie or TV Show
          of their choice by Using various filters.
          <br /> Technologies used in this
          application are React for front-end, scss for styling and The Movie Database for API call.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF
              onClick={() => window.open("https://www.facebook.com/")}
            />
          </span>
          <span className="icon">
            <FaInstagram
              onClick={() => window.open("https://www.instagram.com/")}
            />
          </span>
          <span className="icon">
            <FaGithub
              onClick={() => {
                window.open("https://github.com/Anikettyagi007");
              }}
            />
          </span>
          <span className="icon">
            <FaLinkedin
              onClick={() => {
                window.open("https://www.linkedin.com/in/anikettyagi-/");
              }}
            />
          </span>
        </div>
        <div>
        <p>
						  &copy; By ANIKET TYAGI
                            </p>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

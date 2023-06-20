import React from "react";
import { styled } from "styled-components";

import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Footer1>
      <div className="footer-content">
        <p>© Copyright 2023. All rights reserved | Credit Bazar</p>
        <ul className="footer-links">
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </Footer1>
  );
}

export default Footer;

const Footer1 = styled.div`
  border: 2px solid black;
  background-color: black;
  color: white;
  margin-top:20px;
  footer {
    background-color: black;
    padding: 20px;
    text-align: center;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-content p {
    margin-bottom: 5px;
  }

  .footer-links {
    list-style-type: none;
    padding: 0;
  }

  .footer-links li {
    display: inline-block;
    margin-right: 10px;
  }

  .footer-links li a {
    color: #555;
    text-decoration: none;
  }

  .footer-links li a:hover {
    text-decoration: underline;
  }
`;

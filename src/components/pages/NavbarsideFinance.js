import React, { useState } from "react";
import { styled } from "styled-components";

import {
  FaTh,
  FaBars,
  FaShopify,
  FaRegChartBar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavbarsideFinance = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/financesdashboard",
      name: "Dashboard",
      icon: <FaTh  />,
    },
    {
      path: "/financerequest",
      name: "Finance Request",
      icon: <FaShopify />,
    },
  ];
  return (
    <Navbar1>
      <div className="container">
        <div style={{ width: isOpen ? "280px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "210px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}


        </div>
        <main>{children}</main>
      </div>
    </Navbar1>
  );
};

export default NavbarsideFinance;

const Navbar1 = styled.div`

position:fixed;
 
  .container {
    display: flex;
  }
  main {
    width: 100%;
    padding: 20px;
  }
  .sidebar {
    background: white;
    color: black;
    height: 60vh;
    width: 200px;
    transition: all 0.5s;
    border:2px solid black;
    border-radius:10px;
    margin-top:20vh;
  }
  .top_section {
    display: flex;
    align-items: center;
    padding: 20px 15px;
  }
  .logo {
    font-size: 30px;
  }
  .bars {
    display: flex;
    font-size: 25px;
    margin-left: 50px;
  }
  .link {
    display: flex;
    color: black;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
  }
  .link:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
  .active {
    background: lightskyblue;
    color: #000;
  }
  .icon,
  .link_text {
    font-size: 20px;
  }
`;

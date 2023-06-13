import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../pages/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Navbarfinancer from "../pages/Navbarfinancer";

function Tdashboard() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout successfully");
    navigate("/");
  };

  const handleChange = (e) => {
    if (e.currentTarget.value == "buyer") {
      const win = window.open("http://localhost:3000/bdashboard", "_blank");
      if (win != null) {
        win.focus();
      }
      navigate("/buyersdashboard");
    } else if (e.currentTarget.value == "seller") {
      const win = window.open("http://localhost:3000/sdashboard", "_blank");
      if (win != null) {
        win.focus();
      }
      navigate("/sellersdashboard");
    }
  };

  return (
    <Dash>
     <Navbarfinancer/>

      <div>
        <div
          style={{ fontSize: "35px", marginTop: "20px", marginLeft: "695px" }}
        >
          FinTech Cashflow Finance dashboard
        </div>
        <br />
        <div style={{ fontSize: "20px", marginLeft: "645px" }}>
          Welcome! See your current and projected cashflow status below.
        </div>
      </div>

      <div className="content">
        <div className="content1">Current Cashflow Status</div>
        <br />
        <div className="content2">
          Your current cashflow status is $X. This is a calculation based on
          your recent income and expenses.
        </div>
      </div>

      <div className="content">
        <div className="content1">Projected Cashflow Status</div>
        <br />
        <div className="content2">
          Based on your current income and expense trends, your projected
          cashflow for next month is $Y. Remember, this is only an estimate and
          actual cashflow may vary.
        </div>
      </div>

      <div className="content">
        <div className="content1">Recommended Action</div>
        <br />
        <div className="content2">
          Based on your cashflow status, we recommend you to raise a "Request
          for Finance". This can help maintain positive cashflow for your
          business. Click on the button below to get started.
        </div>
      </div>
    </Dash>
  );
}

export default Tdashboard;

const Dash = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  .content {
    // border: 2px solid black;
    margin-top: 50px;
    height: 150px;
    margin-left: 170px;
    margin-right: 170px;
    background: #d9dddc;
  }

  .content1 {
    font-size: 30px;
    margin-top: 10px;
    margin-left: 30px;
  }
  .content2 {
    font-size: 17px;
    margin-left: 30px;
  }

  .rightsection {
    display: flex;
    width: 400px;
    margin-left: 1400px;
    margin-top: -30px;
    justify-content: space-between;
  }
`;

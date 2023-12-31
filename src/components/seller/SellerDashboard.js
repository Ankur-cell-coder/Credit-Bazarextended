import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";

function Sdashboard(props) {
  const navigate = useNavigate();

  return (
    <>
      
        <Navbarseller />
        <NavbarSide />
    

      <Dash >
        <div>
          <div
            style={{
              display: "flex",
              fontSize: "35px",
              marginTop: "20vh",
              justifyContent: "center",
            }}
          >
            ProFinTech Cashflow Seller Dashboard
          </div>
          <br />
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Welcome! See your current and projected cashflow status below.
          </div>
        </div>

        <div className="content">
          <div className="content1">Current Cashflow Status</div>
          <br />
          <div className="content2">
            Your current cashflow status is INR 10,00,000. This is a calculation
            based on your recent income and expenses.
          </div>
        </div>

        <div className="content">
          <div className="content1">Projected Cashflow Status</div>
          <br />
          <div className="content2">
            Based on your current income and expense trends, your projected
            cashflow for next month is INR 5,00,000. Remember, this is only an
            estimate and actual cashflow may vary.
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
          <button
            onClick={() => {
              navigate("/offer-request");
            }}
            className="button"
          >
            Request For Finance
          </button>
        </div>

      </Dash>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Sdashboard;

const Dash = styled.div`

  display: flex;
  flex-direction: column;
  
  margin-left:10em;
 

  .content {
    margin-top: 50px;
    height: 180px;
    margin-left: 170px;
    margin-right: 170px;
    background: #e5e4e2;
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

  .button {
    margin-left: 20px;
    margin-top: 15px;
    height: 36px;
    background: orange;
    border: 2px solid orange;
    width: 200px;
    font-size: 15px;
  }
  .button:hover {
    background-color: #0056b3;
  }


`;
     
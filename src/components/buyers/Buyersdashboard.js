import React from "react";
import styled from "styled-components";
import Navbar from "../pages/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";
import BuyerSide from "../pages/BuyerSide";

function Bdashboard(props) {
  const navigate = useNavigate();

  return (
    <Dash>
      <div >
        <Navbar />
        <BuyerSide/>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            fontSize: "35px",
            marginTop: "155px",
            justifyContent: "center",
          }}
        >
          FinTech Cashflow Buyers Dashboard
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
          Based on your cashflow status, we recommend you raise a "Request for
          Finance". This can help maintain positive cashflow for your business.
          Click on the button below to get started.
        </div>
        <button
          onClick={() => {
            navigate("/buyersoffer");
          }}
          className="button"
        >
          Request For Finance
        </button>
      </div>
      <div style={{ marginTop: "20vh" }}>
        <Footer />
      </div>
    </Dash>
  );
}

export default Bdashboard;

const Dash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .content {
    margin-top: 50px;
    height: 150px;
    margin-left: 30vh;
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

  /* Make the Navbar sticky */
  Navbar {
    position: fixed;
    top: 0
  }
  .sticky-navbar {
    position: fixed;
    top: 0;
    z-index: 100;
  }

`;

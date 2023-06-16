import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";

function Sdashboard(props) {
  const navigate = useNavigate();

  return (
    <Dash>
      <Navbarseller />
      <div>
        <div
          style={{
            display: "flex",
            fontSize: "35px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          FinTech Cashflow Seller Dashboard
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
          Based on your cashflow status, we recommend you to raise a "Request
          for Finance". This can help maintain positive cashflow for your
          business. Click on the button below to get started.
        </div>
        <button
          onClick={() => {
            navigate("/sellersoffer");
          }}
          className="button"
        >
          Request For Finance
        </button>
      </div>

      <div className="content">
        <div className="content1">Received Offers</div>
        <br />
        <div className="content2">
          Here You will get all received Offers from financier.
        </div>
        <button
          onClick={() => {
            navigate("/sellersreceivedoffers");
          }}
          className="button"
        >
          View Received Offers.
        </button>
      </div>

      <div className="content">
        <div className="content1">Disbursements</div>
        <br />
        <div className="content2">
          This section provides information about the disbursements made to your
          account. You can track the disbursement details and manage the
          funds accordingly.
        </div>
        <button
          onClick={() => {
            navigate("/sellersdisbursement");
          }}
          className="button"
        >
          View disbursements
        </button>
      </div>

      <div className="content">
        <div className="content1">Settlements</div>
        <br />
        <div className="content2">
          In this section, you can view the settlements made for your
          outstanding payments. It provides an overview of the transactions and
          helps you maintain a clear record.
        </div>
        <button
          onClick={() => {
            navigate("/sellerssettlements");
          }}
          className="button"
        >
          View Settlements.
        </button>
      </div>
    </Dash>
  );
}

export default Sdashboard;

const Dash = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  .content {
    // border: 2px solid black;
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
  // .rightsection {
  //   display: flex;
  //   width: 400px;
  //   margin-left: 1400px;
  //   margin-top: -30px;
  //   justify-content: space-between;
  // }

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

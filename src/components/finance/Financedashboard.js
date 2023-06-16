import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../pages/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Navbarfinancer from "../pages/Navbarfinancer";

function Tdashboard() {
  const navigate = useNavigate();

  return (
    <Dash>
      <Navbarfinancer />

      <div>
        <div
          style={{
            display: "flex",
            fontSize: "35px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          FinTech Cashflow Financer Dashboard
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
        <div className="content1">Finance Requests</div>
        <br />
        <div className="content2">
          Based on your cashflow status, we recommend you to raise a "Request
          for Finance". This can help maintain positive cashflow for your
          business. Click on the button below to get started.
        </div>
        <button
          onClick={() => {
            navigate("/financeinitate");
          }}
          className="button"
        >
          View Finance Request
        </button>
      </div>

      <div className="content">
        <div className="content1">Offers Placed</div>
        <br />
        <div className="content2">
          This section displays the offers you have received from lenders. You
          can review the details and take necessary actions.
        </div>
        <button
          // onClick={() => {
          //   navigate("/sellersoffer");
          // }}
          className="button"
        >
         Views Offers Requests
        </button>
      </div>

      <div className="content">
        <div className="content1">Disbursements</div>
        <br />
        <div className="content2">
          This section provides information about the disbursements made to your
          account. You can track the disbursement details and manage the
          funds accordingly.
        </div>
        <button
          onClick={() => {
            navigate("/financedisrubment");
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
            navigate("/financessettlementdetail");
          }}
          className="button"
        >
          View Settlements.
        </button>
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

import React, { useState } from "react";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";
import Navbarseller from "../pages/Navbarseller";
import { useNavigate } from "react-router-dom";

function Request_offers() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="table-container">
          <div className="buttoncontainer">
            <button
              className="btn"
              onClick={() => {
                navigate("/offer-request");
              }}
            >
              New Request For Finance
            </button>
            <button
              className="btn"
              style={{ background: "orange", marginLeft: "30px" }}
            >
              Finance Request
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Trades</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Offers</th>
                <th>Disbursement</th>
                <th>Settlement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/request_information");
                    }}
                  >
                    12345
                  </button>
                </td>
                <td>Trade 1 &amp; 2</td>
                <td>INR 10,000</td>
                <td>Approved</td>
                <td>2</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Request1>
      <div style={{ marginTop: "80vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Request_offers;

const Request1 = styled.div`
  width: 100vh;
  margin-left: 320px;
  margin-top:20vh;
 
  .main-content {
    padding: 20px;
  }
  
  table {
    width: 150%;
    border-collapse: collapse;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 50px;
    width:350px;
    height:50px;
    font-size:20px;
  }
  .btn:hover {
    background-color: #0056b3;
  }
`;

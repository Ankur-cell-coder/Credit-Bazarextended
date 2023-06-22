import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Disbursement() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="button1">
          <button
            className="btn"
            onClick={() => {
              navigate("/request_information");
            }}
          >
            Request Information
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Shipment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/settlement");
            }}
          >
            Settlement
          </button>
        </div>
        <div className="content">
          <div className="main-content">
            <div className="record-summary">
              <h2>Request information</h2>
            </div>
            <div className="record-details">
              <table>
                <tbody>
                  <tr>
                    <th>Request ID</th>
                    <td>123456</td>
                  </tr>

                  <tr>
                    <th> Status</th>
                    <td> Done</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <h2 className="section-heading">Disbursement Details</h2>
            <div className="form-group">
              <label htmlFor="lenderName">Lender Name:</label>
              <input
                type="text"
                id="lenderName"
                name="lenderName"
                defaultValue="Lender A"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="disbursementDate">Disbursement Date:</label>
              <input
                type="text"
                id="disbursementDate"
                name="disbursementDate"
                defaultValue="May 31, 2023"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="disbursedAmount">Disbursed Amount:</label>
              <input
                type="text"
                id="disbursedAmount"
                name="disbursedAmount"
                defaultValue="INR 10,00,000"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="transactionId">Transaction ID:</label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                defaultValue={1234567890}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="bankAccount">Bank Account:</label>
              <input
                type="text"
                id="bankAccount"
                name="bankAccount"
                defaultValue="XXXXXXXXXXXX1234"
                readOnly
              />
            </div>
          </div>
        </div>

       

      </Request1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Disbursement;

const Request1 = styled.div`
  margin-left: 28vh;
  margin-top: -540px;
  
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
  }
  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    margin-left: 20px;
    margin-top: 50px;
  }

  .table-container {
    margin-top: 20px;
  }
  table {
    width: 100%;
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

  .button {
    background: orange;
    width: 200px;
    height: 50px;
    margin-top: 60px;
    margin-left: 30px;
    border: 2px solid orange;
    font-size: 20px;
  }

  .top-bar {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
  .notification-bell {
    margin-left: auto;
    margin-right: 20px;
    font-size: 18px;
  }
  .container {
    width: 80%;
    margin: auto;
    padding: 20px;
  }
  .section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .section-heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .submit-button:hover {
    background-color: #0056b3;
  }
`;

import React from "react";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import { useNavigate } from "react-router-dom";

function SellerDisbursements() {
  const navigate=useNavigate();

  return (
    <Seller1>
      <Navbarseller />
      <button className="button" onClick={()=>{navigate(-1)}}>
        Back to Dashboard
      </button>
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
    </Seller1>
  );
}

export default SellerDisbursements;

const Seller1 = styled.div`
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
  }
   
  .button{
    background:orange;
    width:200px;
    height:50px;
    margin-top:60px;
    margin-left:30px;
    border:2px solid orange;
    font-size:20px;
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

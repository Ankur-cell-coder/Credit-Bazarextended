import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceDisburesment() {
  const navigate = useNavigate();
   
  const [col1, setCol1] = useState("gray");
  const [col2, setCol2] = useState("gray");

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);

    if (col1 == "gray") {
      setCol1("blue");
    } else {
      setCol1("gray");
    }
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
    if (col2 == "gray") {
      setCol2("blue");
    } else {
      setCol2("gray");
    }
  };
  
  return (
    <>
      <Navbarfinancer />
      <NavbarsideFinance />
      <Finance1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_request_information");
            }}
          >
            Request Information
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/finance_offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/finance_disbursement");
            }}
          >
            Disbursement
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/finance_payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        {!open1 ? (
          <div
            className="main-content"
            id="disbursement-content"
            style={{ display: "block" }}
          >
            <div className="bank-details">
              <h2>Bank Details for Funds Transfer</h2>
              <p>
                <strong>Bank Name:</strong> Your Bank Name
              </p>
              <p>
                <strong>Account Name:</strong> Account Holder Name
              </p>
              <p>
                <strong>Account Number:</strong> 123456789012
              </p>
              <p>
                <strong>IFSC Code:</strong> ABCD1234
              </p>
              <p>
                <strong>Branch Address:</strong> Your Branch Address
              </p>
              <p>
                Please ensure that the details provided above are correct before
                proceeding with the transfer.
              </p>
            </div>
            <div className="transfer-message">
              <h2>Transfer Message Instructions</h2>
              <p>
                Please include the following reference message while making the
                transfer:
              </p>
              <p>
                <strong>Reference:</strong> "Payment for [Description or Invoice
                Number]"
              </p>
              <p>
                This message will help us identify your transaction easily.
                Kindly upload the transaction screentshot once the funds
                transfer is made.
              </p>
            </div>

            <div>
              <button className="btnn" onClick={handleToogle}>
                Upload File
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div
              id="Disbursement"
              className="tabcontent"
              style={{ display: "block" }}
            >
              <div
                className="main-content"
                id="disbursement-content"
                style={{ display: "none" }}
              >
                <div className="bank-details">
                  <h2>Bank Details for Funds Transfer</h2>
                  <p>
                    <strong>Bank Name:</strong> Your Bank Name
                  </p>
                  <p>
                    <strong>Account Name:</strong> Account Holder Name
                  </p>
                  <p>
                    <strong>Account Number:</strong> 123456789012
                  </p>
                  <p>
                    <strong>IFSC Code:</strong> ABCD1234
                  </p>
                  <p>
                    <strong>Branch Address:</strong> Your Branch Address
                  </p>
                  <p>
                    Please ensure that the details provided above are correct
                    before proceeding with the transfer.
                  </p>
                </div>
                <div className="transfer-message">
                  <h2>Transfer Message Instructions</h2>
                  <p>
                    Please include the following reference message while making
                    the transfer:
                  </p>
                  <p>
                    <strong>Reference:</strong> "Payment for [Description or
                    Invoice Number]"
                  </p>
                  <p>
                    This message will help us identify your transaction easily.
                    Kindly upload the transaction screentshot once the funds
                    transfer is made.
                  </p>
                </div>
              </div>
              <div
                className="upload-form"
                id="upload-form"
                style={{ display: "block" }}
              >
                <h3>Upload Your File</h3>
                <p>
                  Kindly upload the transaction Screentshot once the funds
                  transfer is made
                </p>
                <input type="file" id="fileInput" accept="/*" />
                <button onclick="uploadFile()" className="btn">
                  Upload
                </button>
                <p id="notification" style={{ color: "green" }} />
              </div>
              <button
                id="disbursement-upload-button"
                className="btn"
                onclick="toggleUploadForm()"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceDisburesment;

const Finance1 = styled.div`
  margin-left: 28vh;

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    width: 300px;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20vh;
    width: 300px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .btnn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;

    width: 250px;
    margin-left: 70vh;
  }
  .main-content {
    padding: 20px;
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

  .btn2 {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
  }
  .btn2:hover {
    background-color: #0056b3;
  }

  .disbursement-details {
    border: 2px solid green;
    background-color: #f8f9fa;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: auto;
    text-align: center;
    width: 100vh;
    height: 65vh;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .disbursement-details h2 {
    margin-top: 0;
    color: #007bff;
  }
  .disbursement-details .details {
    color: #666;
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: flex;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .actions {
    margin-left: 35vh;
    margin-top: 20px;
  }

  .tabcontent {
    //  border:2px solid red;
    display: flex;
    justify-content: center;
  }

  .Disbursement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement details {
    display: none;
    margin-top: 10px;
  }
  .Settlement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Settlement details {
    display: none;
    margin-top: 10px;
  }
  .accept-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .accept-btn {
    color: #fff;
    background-color: #007bff;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .accept-btn:hover {
    background-color: #0056b3;
  }
  .Payment-details {
    background-color: #f8f9fa;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: auto;
    text-align: center;
    width: 530px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .Payment-details h2 {
    margin-top: 0;
    color: #007bff;
  }
  .Payment-details .details {
    color: #666;
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: flex;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .form-group input {
    width: 95%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .actions {
    margin-left: 110px;
    margin-top: 20px;
  }
  .offer-card {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #dddddd;
    margin-bottom: 10px;
    background-color: #f8f9fa;
  }
  .offer-card h2 {
    margin-bottom: 10px;
  }
  .offer-card p {
    margin-bottom: 5px;
  }
  .offer-details {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
  }
  .offer-details h2 {
    margin-top: 0;
  }
  .offer-details .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .offer-details .details {
    color: #666;
  }
  .make-offer {
    background-color: #f8f9fa;
  }
  .form-group {
    margin-top: 10px;
  }
  #amount {
    margin-left: 10px;
  }
  #Margin {
    margin-left: 10px;
  }
  #interest {
    margin-left: 10px;
  }
  #term {
    margin-left: 10px;
  }
  .disbursement-details {
    background-color: #f8f9fa;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: auto;
    text-align: center;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .disbursement-details h2 {
    margin-top: 0;
    color: #007bff;
  }
  .disbursement-details .details {
    color: #666;
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: flex;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .form-group input {
    width: 96%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .actions {
    margin-left: 80px;
    margin-top: 20px;
  }
  .panel-body {
    padding: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    font-weight: bold;
  }
  input[type="text"],
  input[type="number"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type="text"]:focus,
  input[type="number"]:focus,
  input[type="password"]:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
  }
  .bank-details,
  .transfer-message {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    padding: 20px;
    margin: 20px 0;
  }
  h2 {
    color: #333333;
  }
  p {
    color: #666666;
  }
  .upload-form {
    display: none;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  .upload-form h3 {
    font-size: 24px;
    margin-top: 0;
  }

  .upload-form input[type="file"] {
    display: block;
    margin: 10px auto;
  }

  .upload-form button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .upload-form button:hover {
    background-color: #0056b3;
  }
`;

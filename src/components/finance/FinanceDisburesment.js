import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceDisburesment() {
  const navigate = useNavigate();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
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
            className="btn"
            onClick={() => {
              navigate("/finance_trades");
            }}
          >
            Trades
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

        <div>
          <div className="content">
            {!open1 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mainheading" style={{ background: "blue" }}>
                  <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                  <div>
                    <button
                      className="btnn"
                      onClick={handleToogle}
                      style={{ background: "blue", border: "2px solid blue" }}
                    >
                      🔽
                    </button>
                  </div>
                </div>

                <div className="content1" style={{ display: "block" }}>
                  <div className="bank-details">
                    <p>
                      The Offer made for the Finance Request ID: 123456 has been
                      accepted by the Anchor Trader and is waiting for
                      Disbursement Please do the funds transfer to below bank
                      details.
                    </p>
                    <h2>Disbursement Details</h2>
                    <p>
                      <strong>Disbursement amount:</strong> ₹ 3,00,766
                    </p>
                    <h2>Bank Details for Funds Transfer</h2>
                    <p>
                      <strong>Bank Name:</strong> ICICI Bank
                    </p>
                    <p>
                      <strong>Account Name:</strong>Prime Textiles
                    </p>
                    <p>
                      <strong>Account Number:</strong> 123456789012
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> ICIC0001114
                    </p>
                    <p>
                      <strong>Branch Address:</strong> Gachibowli
                    </p>
                    <p>
                      Please ensure that the specified amount is transferred to
                      the account mentioned above..
                    </p>
                  </div>
                  <div className="transfer-message">
                    <h2>Transfer Message Instructions</h2>
                    <p>
                      Please include the following reference message while
                      making the transfer:
                    </p>
                    <p>
                      <strong>Reference:</strong>
                    </p>
                    <p>
                      <strong>Finance Request ID:</strong> 123456
                    </p>
                    <p>
                      <strong>SubGroup ID:</strong> Subgroup 1
                    </p>
                    <p>
                      This message will help us identify your transaction
                      easily. Kindly upload the transaction screenshot once the
                      funds transfer is made.
                    </p>
                    <h3>Upload Your File</h3>
                    <p>
                      Kindly upload the transaction Screenshot once the funds
                      transfer is made
                    </p>
                    <input type="file" id="fileInput" accept="/*" />
                    <button
                      id="fileuploadbtn"
                      onclick="uploadFile(1)"
                      className="btnn1"
                    >
                      Upload
                    </button>
                    <p id="notification-1" style={{ color: "green" }} />
                  </div>
                  <button
                    id="disbursement-upload-button"
                    onclick="confirmBtn(1)"
                    className="btnn1"
                  >
                    Confirm Disbursement
                  </button>
                  <p
                    id="confirm-btn-notification-1"
                    style={{ color: "blue" }}
                  />
                  <div className="select-btn-container"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open2 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle2}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mainheading" style={{ background: "blue" }}>
                  <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                  <div>
                    <button
                      className="btnn"
                      onClick={handleToogle2}
                      style={{ background: "blue", border: "2px solid blue" }}
                    >
                      🔽
                    </button>
                  </div>
                </div>

                <div className="content1" style={{ display: "block" }}>
                  <div className="bank-details">
                    <p>
                      The Offer made for the Finance Request ID: 123456 has been
                      accepted by the Anchor Trader and is waiting for
                      Disbursement Please do the funds transfer to below bank
                      details.
                    </p>
                    <h2>Disbursement Details</h2>
                    <p>
                      <strong>Disbursement amount:</strong> ₹ 4,01,396.9
                    </p>
                    <h2>Bank Details for Funds Transfer</h2>
                    <p>
                      <strong>Bank Name:</strong> ICICI Bank
                    </p>
                    <p>
                      <strong>Account Name:</strong>Prime Textiles
                    </p>
                    <p>
                      <strong>Account Number:</strong> 123456789012
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> ICIC0001114
                    </p>
                    <p>
                      <strong>Branch Address:</strong> Gachibowli
                    </p>
                    <p>
                      Please ensure that the specified amount is transferred to
                      the account mentioned above..
                    </p>
                  </div>
                  <div className="transfer-message">
                    <h2>Transfer Message Instructions</h2>
                    <p>
                      Please include the following reference message while
                      making the transfer:
                    </p>
                    <p>
                      <strong>Reference:</strong>
                    </p>
                    <p>
                      <strong>Finance Request ID:</strong> 123456
                    </p>
                    <p>
                      <strong>SubGroup ID:</strong> Subgroup 2
                    </p>
                    <p>
                      This message will help us identify your transaction
                      easily. Kindly upload the transaction screenshot once the
                      funds transfer is made.
                    </p>
                    <h3>Upload Your File</h3>
                    <p>
                      Kindly upload the transaction Screenshot once the funds
                      transfer is made
                    </p>
                    <input type="file" id="fileInput" accept="/*" />
                    <button
                      id="fileuploadbtn"
                      onclick="uploadFile(2)"
                      className="btnn1"
                    >
                      Upload
                    </button>
                    <p id="notification-2" style={{ color: "green" }} />
                  </div>
                  <button
                    id="disbursement-upload-button"
                    onclick="confirmBtn(2)"
                    className="btnn1"
                  >
                    Confirm Disbursement
                  </button>
                  <p
                    id="confirm-btn-notification-2"
                    style={{ color: "blue" }}
                  />
                  <div className="select-btn-container"></div>
                </div>
              </div>
            )}
          </div>
        </div>
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
    // border-radius: 5px;
    display: inline-block;
    // margin-left: 20px;
    width: 250px;
  }

  .btnn1 {
    width: 300px;
    height: 40px;
    margin-top: 30px;
    border-radius: 10px;
    margin-left: 37%;
    font-size: 22px;
    background-color: blue;
    color:white;
  
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    // margin-left: 20px;
    font-size: 20px;
    margin-top: 20vh;
    width: 250px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .bank-details {
    border: 2px solid black;
    margin-top: 50px;
    padding-left: 50px;
    padding-top: 30px;
  }

  .transfer-message {
    border: 2px solid black;
    margin-top: 50px;
    padding-left: 30px;
  }

  .pheading {
    margin-top: 20px;
  }
  .mainheading {
    font-size: 32px;
    margin-top: 50px;
    color: white;
    margin-left: 5vh;
    width: 60vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    border: 2px solid gray;
  }

  .btnn {
    border: 2px solid blue;
   
  }
  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;





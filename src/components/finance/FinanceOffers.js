import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FinanceOffers() {
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
            className="btn1"
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
            className="btn"
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
                <div className="content" style={{ display: "block" }}>
                  <div className="lender-details">
                    <div style={{marginLeft:"40px",fontSize:"26px"}}>
                    <p>Subgroup value (INR): 450000</p>
                    <p>Offered Amount (INR): 3,06,818 </p>
                    <p>Margin (%): 25 </p>
                    <p>Margin value (INR):</p>
                    <p>Interest p.a (%): 8 </p>
                    <p>Interest p.a (INR): ₹ 6,052 </p>
                    <p>Terms (In Days): 90 </p>
                    <hr />
                    <p>
                      <strong>Status:</strong>Offer has been placed
                    </p>
                    
                    <p
                      id="place-offer-notification-1"
                      style={{ color: "blue" }}
                    />
                    </div>
                  </div>
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

                <div className="content" style={{ display: "block" }}>
                  <div className="lender-details">
                    <div style={{marginLeft:"40px",fontSize:"26px"}}>
                    <p>Subgroup value (INR): 650000</p>
                    <p>Offered Amount (INR): 4,13,818 </p>
                    <p>Margin (%): 30 </p>
                    <p>Margin value (INR):</p>
                    <p>Interest p.a (%): 12 </p>
                    <p>Interest p.a (INR): ₹ 12,052 </p>
                    <p>Terms (In Days): 90 </p>
                    <hr />
                    <p>
                      <strong>Status:</strong>Offer has been placed
                    </p>
                    
                    <p
                      id="place-offer-notification-1"
                      style={{ color: "blue" }}
                    />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "60vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceOffers;

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
  .Payment-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement_details {
    display: none;
    margin-top: 10px;
    padding: 50px;
  }
  .pheading {
    margin-top: 20px;
  }
  .mainheading {
    font-size: 32px;
    margin-top: 20px;
    color: white;
    margin-left: 5vh;
    width: 60vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    border: 2px solid gray;
  }
  .mainheading2 {
    font-size: 32px;
    margin-top: 20px;
    color: white;
    margin-left: 7.5vh;
    width: 55vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
  }
  .content {
    // border: 2px solid black;
    margin-top: 40px;

  }
  .lender-details{
    border:2px solid black;
    width:80%;
  }
  .btnn {
    border: 2px solid blue;
  }
  h1 {
    text-align: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  .Settlement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement details {
    display: none;
    margin-top: 10px;
  }
`;

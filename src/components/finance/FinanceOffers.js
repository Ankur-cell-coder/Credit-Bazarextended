import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceOffers() {
  const navigate = useNavigate();
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

        <div className="container">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                  >
                    Collapsible Group 1
                  </a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div className="lender-details">
                    <h3>Subgroup 1</h3>
                    <p>Offered Amount: INR 19,000</p>
                    <p>Margin: INR 1500 (8%)</p>
                    <p>Interest: INR 1500 (8%)</p>
                    <p>Terms (In days): 45 Days</p>
                    <hr />
                    <p>
                      <strong>Status:</strong>Your offer has been placed
                    </p>
                  </div>
                  <div className="select-btn-container">
                    <button className="btn">Cancel Offer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
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
    width: 300px;
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
    width: 300px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    display: flex;
    margin-top: 20px;
    padding: 20px;
  }


  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .popup .popuptext {
    width: 700px;
    visibility: hidden;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -80px;
    overflow-y: auto;
    border-width: 3px;
    border-style: solid;
    border-color: #000;
  }
  .popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  .btnn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;
    margin-top: 10vh;
    width: 100px;
    margin-left: -80px;
  }
  .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
  .popup .popuptext .btn {
    visibility: hidden;
  }

  .btn:hover {
    background-color: #0056b3;
  }
  .btn-container {
    padding-left: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }.
    to {
      opacity: 1;
    }
  }

  

`;

import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function  FinanceSettlement() {
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
          {/* <button
            className="btn"
            onClick={() => {
              navigate("/finance_view_request");
            }}
          >
            View Request
          </button> */}
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
              navigate("/finance_disbursement");
            }}
          >
            Disbursement
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/finance_shipment");
            }}
          >
            Shipment
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
            className="btn1"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div id = "Settlement" class="tabcontent">
				<div class="main-content">
					<div id="container">
                        <div class="Settlement-details">
                            <h2>Settlement Details</h2>
                            <p>Settlement has been made by Profintech Technologies please check you account, Below are the details.</p>
                            <div class="details">
                            <p>Settlement Amount: INR 7,50,000</p>
                            <p>Margin (25%): INR 2,50,000</p>
                            <p>Interest (12%): INR 22,191.78</p>
                            <p>Term: 90 days</p>
                            <p>Payment loyality (2%): INR 4,932</p>
                            <p>Technology charge (2%): INR 4,932 </p>
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

export default  FinanceSettlement;

const Finance1 = styled.div`
  margin-left: 28vh;
 
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
    margin-top:20vh;
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

  .Settlement-details {
    background-color: #F8F9FA;
    padding: 20px;
    margin-top: 90px;
    margin-bottom: auto;
    text-align: center;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-left:48vh;
}
.Settlement-details h2 {
    margin-top: 0;
    color: #007BFF;
}
.Settlement-details .details {
    color: #666;
    margin-top: 40px;

}


   

`;

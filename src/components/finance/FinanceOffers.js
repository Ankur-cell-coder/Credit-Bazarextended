import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import { useCount } from "../../context/count";

function FinanceOffers() {
  const navigate = useNavigate();

  const { data } = useCount();
  console.log(data.length);
  console.log(data);

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

         
          {data.map((item, index) => (
            <div className="offer_element">
              <div className="heading">Collapsible Group {index+1}</div>

            <div className="heading_content">
            <div className="subgp">Subgroup {index+1}</div>
            <div key={index} className="ele">Offered Amount: INR {item.amount}</div>
            <div key={index} className="ele">Margin: INR {item.margin}</div>
            <div key={index} className="ele">Interest: INR {item.interest}</div>
            <div key={index} className="ele">Terms (In days): {item.terms}</div>
            </div>

            <div className="status">
               Status:Your offer has been placed
            </div>
            
            <button className="btnn">

              Cancel Offer

            </button>

            </div>
          ))}
       

      

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

 
  .btnn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;
   
    width: 300px;
    margin-left: 80px;
    margin-top:20px;
    margin-bottom:20px;
  }

  .ele{
    font-size:20px;
    margin-top:2px;
  }
 

  .btn:hover {
    background-color: #0056b3;
  }
  .btn-container {
    padding-left: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
   
  .offer_element{
    border:2px solid black;
    margin-top:5px;
    margin-left:30px;
    width:1100px;
  }
  
  .heading{
    border:2px solid black;
    height:45px;
    font-size:28px;
    margin-top:-1px;
    margin-left:-1px;
    background:silver;
  }

  .heading_content{
    padding:40px;
    
  }
  .status{
    border-top:1px solid black;
    margin-left:40px;
    margin-right:40px;
    font-size:28px;
  }
  .subgp{
    font-size:36px;
  }

`;

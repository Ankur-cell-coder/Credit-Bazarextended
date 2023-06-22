import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import { useCount } from "../../context/count";
import Footer from "../pages/Footer";
import NavbarsideFinance from "../pages/NavbarsideFinance";

function FinanceInitate() {
    
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [margin, setMargin] = useState("");
  const [interest, setInterest] = useState("");
  const [terms, setTerms] = useState("");

  const {incrementCount1}=useCount();

  const handleClick=()=>{
    incrementCount1();
    navigate('/financeofferacknowledgement');
  }

  return (
    <>
       <Navbarfinancer/>
       <NavbarsideFinance/>
    <Finance1>
   
      
    <div className="content">
        <div className="offer-details">
            <h2>Request details</h2>
            <div className="title">Request ID</div>
            <div className="details">
                <p>Offered Amount: INR 7,50,000</p>
                <p>Margin (25%): INR 2,50,000</p>
                <p>Interest (12%): INR 22,191.78</p>
                <p>Term: 90 days</p>
            </div>
        </div>
        <div className="offer-section">
            <h2>Make an Offer</h2>
            <div className="form-group">
                <label for="amount">Amount:</label>
                <input
          type="txt"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
          name="amount"
          placeholder="Enter Amount"
          required
        />
        </div>
            <div className="form-group">
                <label for="Margin">Margin:</label>
               <input
          type="txt"
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          id="margin"
          name="margin"
          placeholder="Enter Margin"
          required
        />
        </div>
            <div className="form-group">
                <label for="interest">Interest Rate:</label>
                  <input
          type="txt"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          id="interest"
          name="interest"
          placeholder="Enter Interest Rate"
          required
        />
        </div>
            <div className="form-group">
                <label for="term">Term (in days):</label>
               <input
          type="txt"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          id="terms"
          name="terms"
          placeholder="Enter Term"
          required
        />
                           </div>
        </div>
       
        <div className="btn-container">
           <button className="btn" onClick={handleClick}>
            Place an Offer
        </button>
        <button className="btn" onClick={()=>{navigate('/financesdashboard')}}>
            Decline Request
        </button>
        </div>
    </div>

    </Finance1>
  <Footer/>
    
    </>
  );
}

export default FinanceInitate;

const Finance1 = styled.div`
   
display: flex;
  flex-direction: column;
   margin-top:-65vh;
   margin-left:268px;

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .content {
            margin-top: 50px; /* Adjust the margin to move content down */
            padding: 20px;
        }
        .details {
            margin-bottom: 50px;
        }
        .offer-details {
            background-color: #F8F9FA;
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
        .pros-cons {
            display: flex;
            justify-content: space-between;
            margin-top: 0px;
        }
        .pros-cons h3 {
            margin: 0px;
        }
        .pros {
            color: green;
        }
        .cons {
            color: red;
        }
        .btn-container {
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
        .btn {
            color: white;
            background-color: orange;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-right: 10px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .form-group {
            margin-bottom: 20px;
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
        .form-group select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
        }
    


`;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";

function FinanceInitate() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [margin, setMargin] = useState("");
  const [interest, setInterest] = useState("");
  const [terms, setTerms] = useState("");

  return (
    <Finance1>
      <Navbarfinancer/>
      <div className="requestdetail">
        <h2>Request Details</h2>
        <h3>Request Id</h3>
        <div>Offered Amount: INR 7,50,000</div>
        <div>Margin (25%): INR 2,50,000</div>
        <div>Interest (12%): INR 22,191.78</div>
        <div>Term: 90 days</div>
      </div>

      <div>
        <h1>Make An Offer</h1>

        <label htmlFor="amount" style={{ marginLeft: "-90px" }}>
          Amount:
        </label>
        <br />
        <input
          type="txt"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
          name="amount"
          placeholder="Enter Amount"
          required
        />
        <br />

        <label htmlFor="margin" style={{ marginLeft: "-90px" }}>
         Margin:
        </label>
        <br />
        <input
          type="txt"
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          id="margin"
          name="margin"
          placeholder="Enter Margin"
          required
        />
        <br />

        <label htmlFor="interest" style={{ marginLeft: "-90px" }}>
          Interest:
        </label>
        <br />
        <input
          type="txt"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          id="interest"
          name="interest"
          placeholder="Enter Interest Rate"
          required
        />
        <br />

        <label htmlFor="terms" style={{ marginLeft: "-90px" }}>
         Terms (in days):
        </label>
        <br />
        <input
          type="txt"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          id="terms"
          name="terms"
          placeholder="Enter Term"
          required
        />
        <br />
      </div>
     
     <div className="proscons">
        <div className="pros">
           <h1>Pros:</h1>
         <div>  Low interest rate compared to market average.</div>
         <div>Short term with quick return on investment.</div>
         <div>No collateral requirement.</div>
        </div>
        <div className="cons">
        <h1>Cons:</h1>
         <div>Higher monthly payments due to shorter term.</div>
         <div>Opportunity cost of tying up funds in this investment.</div>
        </div>
     </div>

     <div className="buttonsection">
        <button className="button" onClick={()=>{navigate('/financeofferacknowledgement')}}>
            Place an Offer
        </button>
        <button className="button" onClick={()=>{navigate('/financesdashboard')}}>
            Decline Request
        </button>
     </div>

    </Finance1>
  );
}

export default FinanceInitate;

const Finance1 = styled.div`



`;

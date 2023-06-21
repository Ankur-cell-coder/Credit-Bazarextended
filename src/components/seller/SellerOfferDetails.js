import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";
import { useAuth } from "../../context/auth";
import axios from "axios";
import NavbarSide from "../pages/NavbarSide";

function SellerOfferDetails() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  console.log(auth.user.id);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/email", {
        sellerId: auth.user.id,
      });
      alert('email sent successfully');
      navigate("/finance-request");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <Navbarseller />
      <NavbarSide/>
      <Details1>
        <div id="container">
        <div className="buttoncontainer">
            <button
              className="btn"
              onClick={() => {
                navigate("/offer-request");
              }}
            >
              New Request For Finance
            </button>
            <button
              className="btn"
              style={{ background: "blue", marginLeft: "30px" }}
            >
              Finance Request
            </button>
            </div>
          <div className="header">
            <h1>Projected Offers</h1>
            <p>
              Here are the current state of your request for finance and
              multiple projected offers:
            </p>
          </div>
          <div className="content">
            <h2>Current State</h2>
            <div className="state-item">
              <div className="state-label">Current Cashflow:</div>
              <div className="state-value">$50,000</div>
            </div>
            <div className="state-item">
              <div className="state-label">Requested Amount:</div>
              <div className="state-value">$30,000</div>
            </div>
          </div>
          <div className="content">
            <h2>Projected Offers</h2>
            <div className="projection-item">
              <div className="projection-label">Offer 1</div>
              <div className="projection-value">
                <div>Term: 12 months</div>
                <div>Amount: $100,000</div>
                <div>Interest Rate: 8%</div>
              </div>
            </div>
            <div className="projection-item">
              <div className="projection-label">Offer 2</div>
              <div className="projection-value">
                <div>Term: 24 months</div>
                <div>Amount: $150,000</div>
                <div>Interest Rate: 9%</div>
              </div>
            </div>
            <div className="projection-item">
              <div className="projection-label">Offer 3</div>
              <div className="projection-value">
                <div>Term: 18 months</div>
                <div>Amount: $120,000</div>
                <div>Interest Rate: 7.5%</div>
              </div>
            </div>
          </div>
          <div className="content">
            <button className="btn" onClick={handleClick}>
              Accept Offer
            </button>
          </div>
        </div>
      </Details1>
      <div style={{marginTop:"20vh"}}>
      <Footer />
      </div>
    </>
  );
}

export default SellerOfferDetails;

const Details1 = styled.div`
width: 100vh;
margin-left: 320px;
margin-top: -420px;
@media only screen and (min-width: 1800px) {
  margin-top: -560px;
}

  body {
    font-family: Arial, sans-serif;
  }
  #container {
    width: 170%;
    margin: auto;
  }
  .header {
    text-align: center;
    padding: 20px;
    color: #333;
  }
  .content {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
  }
  .btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    width:350px;
    height:50px;
    font-size:20px;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .state-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .state-item:last-child {
    border-bottom: none;
  }
  .state-label {
    font-weight: bold;
  }
  .state-value {
    font-style: italic;
  }
  .projection-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .projection-item:last-child {
    border-bottom: none;
  }
  .projection-label {
    font-weight: bold;
  }
  .projection-value {
    font-style: italic;
  }
`;

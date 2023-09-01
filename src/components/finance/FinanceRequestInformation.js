import React from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import financeimg from "../images/Finance Request.png";

function FinanceRequestInformation() {
  const navigate = useNavigate();
  return (
    <>
      <Navbarfinancer />
      <NavbarsideFinance />
      <Finance1>
        <div className="content">
          <div id="RequestInformation" className="tabcontent">
            <div className="main-content">
              <div className="record-summary"></div>
              <div id="container">
                <div className="header">
                  <h2 align="center">Finance requests</h2>
                </div>

                <div className="offer-card">
                  <div className="imagerequest">
                    <div>
                      <img src={financeimg} className="img" />
                    </div>

                    <div style={{fontSize:"28px"}}>Request ID: 1580147</div>
                  </div>

                  <div className="lender-details">Amount: INR 6,00,000</div>

                  <div className="select-btn-container">
                    <button
                      className="btn5"
                      onClick={() => {
                        navigate("/finance_view_request");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>

                <div className="offer-card">
                  <div className="imagerequest">
                    <div>
                      <img src={financeimg} className="img" />
                    </div>

                    <div style={{fontSize:"28px"}}>Request ID: 5896478</div>
                  </div>

                  <div className="lender-details">Amount: INR 10,00,000</div>

                  <div className="select-btn-container">
                    <button
                      className="btn5"
                      onClick={() => {
                        navigate("/finance_view_request");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>


                <div className="offer-card">
                  <div className="imagerequest">
                    <div>
                      <img src={financeimg} className="img" />
                    </div>

                    <div style={{fontSize:"28px"}}>Request ID: 7496581</div>
                  </div>

                  <div className="lender-details">Amount: INR 8,00,000</div>

                  <div className="select-btn-container">
                    <button
                      className="btn5"
                      onClick={() => {
                        navigate("/finance_view_request");
                      }}
                    >
                      Select
                    </button>
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

export default FinanceRequestInformation;

const Finance1 = styled.div`
  margin-left: 28vh;

  .content {
    margin-left: 20px;
    margin-top: 20vh;
    display: flex;
  }
  .offer-card {
    border: 2px solid white;
    width:175%;
    margin-bottom: 30px;
    display:flex;
    height:170px;
    justify-content:space-between;
    box-shadow: 10px 10px 10px 10px #FAF5EF;
    border-radius:25px;
    
  }

  .lender-details{
    font-size:32px;
    margin-top:70px;
  }

   .imagerequest{
    margin-top:30px;
    margin-left:40px;
   }

  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .btn5 {
    color: white;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 15px;
    width:200px;
    font-size:26px;
    height:45px;
  }
  .btn5:hover {
    background-color: #0056b3;
  }

  .select-btn-container{
    margin-top:70px;
    margin-right:60px;
  }

  .img{
    width:100px;
    height:80px;
    margin-left:70px;
  }
  .header{
    display:flex;
    justify-content:center;
    width:170%;
    margin-bottom:30px;
    font-size:24px;
  }
  
`;

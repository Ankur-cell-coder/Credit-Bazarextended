import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

function FinanceSettlement() {
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
            className="btn1"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div className="main-content">
          <div id="container">
            <div className="pheading">
              <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
                Settlement details
              </div>
              <div style={{ fontSize: "24px", marginLeft: "43vh" }}>
                ProFinTech Technologies made the settlement as credit Period is
                coming to an end.
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">Subgroup 1</div>
              <div className="panel-body">
                <div className="panel-header" style={{marginLeft:"60px"}}>LiquiLoans NBFC</div>
                <div className="Settlement details">
                  <h1>Settlement Information</h1>
                  <h2>Seller Information</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Name:</th>
                        <td>Prime Textiles</td>
                      </tr>
                      <tr>
                        <th>Contact Details:</th>
                        <td>info@primetextiles.in</td>
                      </tr>
                      <tr>
                        <th>GST:</th>
                        <td>36AAIFP3688H1ZS</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Buyer Information</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Name:</th>
                        <td>Hospital 1</td>
                      </tr>
                      <tr>
                        <th>Contact Details:</th>
                        <td>Hospital1.doe@example.com</td>
                      </tr>
                      <tr>
                        <th>GST:</th>
                        <td>123-45-5656</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Lender Information</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Name:</th>
                        <td>LiquiLoans NBFC</td>
                      </tr>
                      <tr>
                        <th>Contact Details:</th>
                        <td>info@liquiloans.com</td>
                      </tr>
                      <tr>
                        <th>GST:</th>
                        <td>123456789</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Settlement Details</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Settlement Amount:</th>
                        <td>INR 19,000</td>
                      </tr>
                      <tr>
                        <th>Margin:</th>
                        <td>INR 1500 (8%)</td>
                      </tr>
                      <tr>
                        <th>Interest Rate:</th>
                        <td>INR 1500 (8%)</td>
                      </tr>
                      <tr>
                        <th>Repayment Term:</th>
                        <td>45 days</td>
                      </tr>
                      <tr>
                        <th>Payment loyalty for Trade partner:</th>
                        <td>INR 400.00</td>
                      </tr>
                      <tr>
                        <th>ProFinTech technology charges:</th>
                        <td>INR 400.00</td>
                      </tr>
                      <tr>
                        <th>Payment to Anchor:</th>
                        <td>INR 200.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Settlement Date</h2>
                  <p>Sep 25, 2023</p>
                  <h2>Settlement Method</h2>
                  <p>Direct Deposit</p>
                  <h2>Patron of the Payment</h2>
                  <p>ProFinTech Technologies</p>
                  <h2>Recipient of the Payment</h2>
                  <p>LiquiLoans NBFC</p>
                  <h2>Settlement Schedule</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Due Date</th>
                      </tr>
                      <tr>
                        <td>Sep 29, 2023</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>Settlement Agreement</h2>
                  <p>
                    Please review and accept the{" "}
                    <a href="#">Settlement Agreement</a> for more information.
                  </p>
                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions or need assistance, please contact
                    our customer service at 1-800-123-4567 or email us at
                    info@example.com.
                  </p>
                  <div className="Settlement-confirmation">
                    <h2>Settlement Confirmation</h2>
                    <p>
                      Settlement has been made by ProFinTech Technologies to
                      LiquiLoans NBFC. Confirmation Number: ABD2512
                    </p>
                    <button className="btnn">Confirm Settlement</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Finance1>
      <div style={{ marginTop: "60vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceSettlement;

const Finance1 = styled.div`
  margin-left: 28vh;
   
  .panel-header{
    border:2px solid black;
    height:40px;
    margin-top:15px;
    font-size:24px;
    width:600px;
    background:silver;
    
  }

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
  .btnn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;
   
    width: 300px;
    margin-left:70vh;
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
    // border: 2px solid red;
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

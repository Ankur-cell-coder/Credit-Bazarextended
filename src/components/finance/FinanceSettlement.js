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
              navigate("/finance_trades");
            }}
          >
            Trade
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

        <div className="content">
          {!open1 ? (
            <div className="mainheading" style={{ background: col1 }}>
              <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
              <div>
                <button
                  className="btnn"
                  onClick={handleToogle}
                  style={{ background: col1, border: `2px solid ${col1}` }}
                >
                  🔽
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mainheading" style={{ background: col1 }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle}
                    style={{ background: col1, border: `2px solid ${col1}` }}
                  >
                    🔽
                  </button>
                </div>
              </div>

              <div className="main-content">
                <div id="container">
                  <div className="pheading">
                    <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
                      Settlement details
                    </div>
                    <div style={{ fontSize: "24px", marginLeft: "43vh" }}>
                      ProFinTech Technologies made the settlement as credit
                      Period is coming to an end.
                    </div>
                  </div>

                  <div className="Settlement details">
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
                          <td>Apollo Hospitals</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>enquiry@apollohospitals.com</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>36AAACA5443N2ZI</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Lender Information</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name:</th>
                          <td>IKF Finance Limited</td>
                        </tr>
                        <tr>
                          <th>Contact Details:</th>
                          <td>info@ikf.com</td>
                        </tr>
                        <tr>
                          <th>GST:</th>
                          <td>36AAACI4784J2Z8</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Disbursement Details</h2>
                    <div className="bank-details">
                      <p>
                        <strong>Disbursement amount:</strong> ₹ 3,00,766
                      </p>
                      <div style={{marginLeft:"50px"}}>
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
                      </div>
                      <p>
                        Please ensure that the specified amount is transferred
                        to the account mentioned above.
                      </p>
                    </div>
                    <h2>Settlement Details</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th>Settlement Amount:</th>
                          <td>₹ 3,06,818</td>
                        </tr>
                        <tr>
                          <th>Repayment Term:</th>
                          <td>90 days</td>
                        </tr>
                        <tr>
                          <th>Payment loyalty for Trade partner:</th>
                          <td>₹ 1,109.59</td>
                        </tr>
                        <tr>
                          <th>ProFinTech technology charges:</th>
                          <td>₹ 2219.17</td>
                        </tr>
                        <tr>
                          <th>Payment to Anchor Trader:</th>
                          <td>₹ 1,39,853</td>
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
                    <p>IKF Finance Limited</p>
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
                    <div className="bank-details">
                      <div style={{marginLeft:"40px"}}>
                      <p>
                        I would like to inform you that the settlement amount of
                        ₹ 3,06,818 has been successfully made to the below
                        mentioned bank account details. Transaction Reference
                        No: 1234567890
                      </p>
                      </div>
                      <h2>Bank Details</h2>

                      <div style={{marginLeft:"40px"}}>
                      <p>
                        <strong>Bank Name:</strong> ICICI Bank
                      </p>
                      <p>
                        <strong>Account Name:</strong>IKF Finance
                      </p>
                      <p>
                        <strong>Account Number:</strong> 123456789014
                      </p>
                      <p>
                        <strong>IFSC Code:</strong> ICIC0001114
                      </p>
                      <p>
                        <strong>Branch Address:</strong> Gachibowli
                      </p>
                       </div>
                      <p>
                        Please verify the transaction at your earliest
                        convenience.
                      </p>
                     
                    </div>
                    <h2>Settlement Agreement</h2>
                    <p>
                      Please review and accept the{" "}
                      <a href="#">Settlement Agreement</a> for more information.
                    </p>
                    <h2>Contact Information</h2>
                    <p>
                      If you have any questions or need assistance, please
                      contact our customer service at 1-800-123-4567 or email us
                      at settlements@profintech.in
                    </p>
                    <div className="Settlement-confirmation">
                      <h2>Settlement Confirmation</h2>
                      <p>
                        Settlement has been made by ProFinTech Technologies to
                        IKF Finance Limited. Confirmation Number: ABD2512
                      </p>
                      <button onclick="confirm_settlement(1)" className="btnn1">
                        Confirm Settlement
                      </button>
                      <p
                        id="confirm-settlement-notification-1"
                        style={{ color: "blue" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="content">
          {!open2 ? (
            <div className="mainheading" style={{ background: col2 }}>
              <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
              <div>
                <button
                  className="btnn"
                  onClick={handleToogle2}
                  style={{ background: col2, border: `2px solid ${col2}` }}
                >
                  🔽
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mainheading" style={{ background: col2 }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle2}
                    style={{ background: col2, border: `2px solid ${col2}` }}
                  >
                    🔽
                  </button>
                </div>
              </div>

              <div className="main-content">
                <div id="container">
                  <div className="pheading">
                    <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
                      Settlement details
                    </div>
                    <div style={{ fontSize: "24px", marginLeft: "43vh" }}>
                      ProFinTech Technologies made the settlement as credit
                      Period is coming to an end.
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-body">
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
                              <td>Renova hospital</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>enquiry@Example.com</td>
                            </tr>
                            <tr>
                              <th>GST:</th>
                              <td>36ABCCS4959C1Z9</td>
                            </tr>
                          </tbody>
                        </table>
                        <h2>Lender Information</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>IKF Finance Limited</td>
                            </tr>
                            <tr>
                              <th>Contact Details:</th>
                              <td>info@ikf.com</td>
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
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h2>Contact Information</h2>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Settlement-confirmation">
                          <h2>Settlement Confirmation</h2>
                          <p>
                            Settlement has been made by ProFinTech Technologies
                            to LiquiLoans NBFC. Confirmation Number: ABD2512
                          </p>
                          <button className="btnn1">Confirm Settlement</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
  .pheading {
    margin-top: 20px;
  }
  .bank-details
  {
    border:2px solid black;
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
  .btnn1 {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;

    width: 300px;
    margin-left: 70vh;
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
  .Settlement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
`;

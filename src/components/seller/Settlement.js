import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Settlement() {
  const navigate = useNavigate();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  const handleToogle = () => {
    setOpen1(!open1);
  };

  const handleToogle2 = () => {
    setOpen2(!open2);
  };

  const handleToogle3 = () => {
    setOpen3(!open3);
  };
  const handleToogle4 = () => {
    setOpen4(!open4);
  };
  const handleToogle5 = () => {
    setOpen5(!open5);
  };
  const handleToogle6 = () => {
    setOpen6(!open6);
  };
  const handleToogle7 = () => {
    setOpen7(!open7);
  };
  const handleToogle8 = () => {
    setOpen8(!open8);
  };

  return (
    <>
      <Navbarseller />
      <NavbarSide />
      <Request1>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              navigate("/request_information");
            }}
          >
            Request Information
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/offers");
            }}
          >
            Offers
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/disbursement");
            }}
          >
            Disbursement
          </button>
          {/* <button
            className="btn"
            onClick={() => {
              navigate("/shipment");
            }}
          >
            Shipment
          </button> */}
          <button
            className="btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn1"
            onClick={() => {
              navigate("/settlement");
            }}
          >
            Settlement
          </button>
        </div>

        <div>
          <div className="pheading">
            <div style={{ fontSize: "34px", marginLeft: "65vh" }}>
              Settlement details
            </div>
            <div style={{ fontSize: "24px", marginLeft: "38vh" }}>
              ProFinTech Technologies made the settlement as credit Period is
              coming to an end.
            </div>
          </div>

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
                {!open2 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>
                        Acknowledgement for settlement
                      </div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      className="mainheading"
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 1</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>
                        Acknowledgement for settlement
                      </div>

                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle2}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3>Finance Partner ID: FP12345</h3>
                    </div>

                    <div className="bwcontent">
                      <div className="Settlement details">
                        <div>
                          <h3 align="center">Settlement Information</h3>
                          <p align="center">
                            ProFinTech Technologies made the settlement as the
                            credit period is coming to an end.
                          </p>
                        </div>
                        <h1 align="center">Settlement Details</h1>
                        <h3>Seller Information</h3>
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
                        <br />
                        <h3>Buyer Information</h3>
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
                        <br />
                        <h3>Lender Information</h3>
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
                        <br />
                        <h3>Disbursement Details</h3>
                        <div className="bank-details">
                          <p>
                            <strong>Disbursement amount:</strong> ₹ 3,00,766
                          </p>
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
                          <p>
                            Please ensure that the specified amount is
                            transferred to the account mentioned above.
                          </p>
                        </div>
                        <h3>Settlement Details</h3>
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
                        <br />
                        <h3>Settlement Date</h3>
                        <p>Sep 25, 2023</p>
                        <h3>Settlement Method</h3>
                        <p>Direct Deposit</p>
                        <h3>Patron of the Payment</h3>
                        <p>ProFinTech Technologies</p>
                        <h3>Recipient of the Payment</h3>
                        <p>IKF Finance Limited</p>
                        <h3>Settlement Schedule</h3>
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
                          <p>
                            We would like to inform you that the settlement
                            amount of ₹ 3,06,818 has been successfully made to
                            the below mentioned bank account details.
                            Transaction Reference No: 1234567890
                          </p>
                          <h3>Bank Details</h3>
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
                          <p>
                            Please verify the transaction at your earliest
                            convenience.
                          </p>
                        </div>
                        <h3>Settlement Agreement</h3>
                        <p>
                          Please review and accept the
                          <a href="#">Settlement Agreement</a> for more
                          information.
                        </p>
                        <h3>Contact Information</h3>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at settlements@profintech.in
                        </p>
                        <div className="Settlement-confirmation">
                          <h3>Settlement Confirmation</h3>
                          <p>
                            Settlement has been made by ProFinTech Technologies
                            to IKF Finance Limited. Confirmation Number: ABD2512
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="content">
            {!open3 ? (
              <div className="mainheading" style={{ background: "gray" }}>
                <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                <div>
                  <button
                    className="btnn"
                    onClick={handleToogle3}
                    style={{ background: "gray", border: "2px solid gray" }}
                  >
                    🔽
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {!open4 ? (
                  <div>
                    <div className="mainheading" style={{ background: "blue" }}>
                      <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle3}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "gray" }}
                    >
                      <div style={{ marginLeft: "15px" }}>Acknowledgement for settlement</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{
                            background: "gray",
                            border: "2px solid gray",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      className="mainheading"
                      style={{ background: "blue", width: "150vh" }}
                    >
                      <div style={{ marginLeft: "5px" }}>Subgroup 2</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle3}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div
                      className="mainheading2"
                      style={{ background: "blue", width: "140vh" }}
                    >
                      <div style={{ marginLeft: "15px" }}>Acknowledgement for settlement</div>
                      <div>
                        <button
                          className="btnn"
                          onClick={handleToogle4}
                          style={{
                            background: "blue",
                            border: "2px solid blue",
                          }}
                        >
                          🔽
                        </button>
                      </div>
                    </div>

                    <div className="bwcontent">
                      <div className="Settlement details">
                        <div>
                          <h3 align="center">Settlement Information</h3>
                          <p align="center">
                            ProFinTech Technologies made the settlement as the
                            credit period is coming to an end.
                          </p>
                        </div>
                        <div className="Disbursement details">
                          <h3>Seller Information</h3>
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
                          <h3>Buyer Information</h3>
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
                          <h3>Lender Information</h3>
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
                          <h3>Disbursement Details</h3>
                          <div className="bank-details">
                            <p>
                              <strong>Disbursement amount:</strong> ₹ 4,01,396.9
                            </p>
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
                            <p>
                              Please ensure that the specified amount is
                              transferred to the account mentioned above.
                            </p>
                          </div>
                          <h3>Settlement Details</h3>
                          <table>
                            <tbody>
                              <tr>
                                <th>Settlement Amount:</th>
                                <td>₹ 4,13,636</td>
                              </tr>
                              <tr>
                                <th>Repayment Term:</th>
                                <td>90 days</td>
                              </tr>
                              <tr>
                                <th>Payment loyalty for Trade partner:</th>
                                <td>₹ 3,205.48</td>
                              </tr>
                              <tr>
                                <th>ProFinTech technology charges:</th>
                                <td>₹ 3,205.48</td>
                              </tr>
                              <tr>
                                <th>Payment to Anchor Trader:</th>
                                <td>₹ 2,29,953.04</td>
                              </tr>
                            </tbody>
                          </table>
                          <h3>Settlement Date</h3>
                          <p>Sep 25, 2023</p>
                          <h3>Settlement Method</h3>
                          <p>Direct Deposit</p>
                          <h3>Patron of the Payment</h3>
                          <p>ProFinTech Technologies</p>
                          <h3>Recipient of the Payment</h3>
                          <p>IKF Finance Limited</p>
                          <h3>Settlement Schedule</h3>
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
                            <p>
                              I would like to inform you that the settlement
                              amount of ₹ 4,13,636 has been successfully made to
                              the below mentioned bank account details.
                              Transaction Reference No: 1234567890
                            </p>
                            <h2>Bank Details</h2>
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
                              <strong>IFSC Code:</strong> ABCD1234
                            </p>
                            <p>
                              <strong>Branch Address:</strong> Gachibowli
                            </p>
                            <p>
                              Please verify the transaction at your earliest
                              convenience.
                            </p>
                          </div>
                          <h3>Settlement Agreement</h3>
                          <p>
                            Please review and accept the
                            <a href="#">Settlement Agreement</a> for more
                            information.
                          </p>
                          <h2>Contact Information</h2>
                          <p>
                            If you have any questions or need assistance, please
                            contact our customer service at 1-800-123-4567 or
                            email us at settlements@profintech.in
                          </p>
                          <div className="Settlement-confirmation">
                            <h3>Settlement Confirmation</h3>
                            <p>
                              Settlement has been made by ProFinTech
                              Technologies to IKF Finance Limited. Confirmation
                              Number: ABD2512
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Request1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Settlement;

const Request1 = styled.div`
  margin-left: 28vh;

  .content {
    display: flex;
    margin-top: 20px;
  }

  .main-content {
    padding: 20px;
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

  .btn:hover {
    background-color: #0056b3;
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
    }
    to {
      opacity: 1;
    }
  }

  .text-fields {
    display: none;
    margin-top: 10px;
  }
  .text-field {
    margin-bottom: 10px;
  }
  .button {
    color: #007bff;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 20px;
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
  .disbursement-confirmation {
    background-color: #dff0d8;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Disbursement details {
    display: none;
    margin-top: 10px;
  }

  .btn1 {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    width: 250px;
  }
  .btn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20vh;
    width: 250px;
  }
  .btn:hover {
    background-color: #0056b3;
  }

  .content {
    margin-left: 20px;
    margin-top: 20px;
  }
  .main-content {
    padding: 20px;
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Payment() {
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

          <button
            className="btn1"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Payment
          </button>
          <button
            className="btn"
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
              Payment details
            </div>
            <div style={{ fontSize: "24px", marginLeft: "52vh" }}>
              Buyers made the paymentent as credit Period is coming to an end.
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
                        Acknowledgement for payment
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
                        Acknowledgement for payment
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

                    <div className="bwcontent">
                      <div className="Disbursement details">
                        <h3 align="center">Payment Information</h3>
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
                        <h3>Payment Details</h3>
                        <table>
                          <tbody>
                            <tr>
                              <th>Value of subgroup:</th>
                              <td>INR 4,50,000</td>
                            </tr>
                            <tr>
                              <th>Payment Amount:</th>
                              <td>INR 4,50,000</td>
                            </tr>
                            <tr>
                              <th>Repayment Term:</th>
                              <td>90 days</td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <h3>Payment Date</h3>
                        <p>Sep 25, 2023</p>
                        <h3>Payment Method</h3>
                        <p>Direct Deposit</p>
                        <h3>Patron of the Payment</h3>
                        <p>Apollo Hospital</p>
                        <h3>Recipient of the Payment</h3>
                        <p>ProFinTech Technologies</p>
                        <h3>Repayment Schedule</h3>
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
                        <br />
                        <h3>Payment Agreement</h3>
                        <p>
                          Please review and accept the
                          <a href="#">Payment Agreement</a> for more
                          information.
                        </p>
                        <h3>Contact Information</h3>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Payment-confirmation">
                          <h3>Payment Confirmation</h3>
                          <p>
                            Payment has been made by Apollo Hospital to
                            ProFinTech Technologies. Confirmation Number: ABD258
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
                      <div style={{ marginLeft: "15px" }}>
                        Acknowledgement for payment
                      </div>
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
                      <div style={{ marginLeft: "15px" }}>
                        Acknowledgement for payment
                      </div>
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
                      <div className="Disbursement details">
                        <h3 align="center">Payment Information</h3>
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
                        <br />
                        <h3>Payment Details</h3>
                        <table>
                          <tbody>
                            <tr>
                              <th>Value of subgroup:</th>
                              <td>INR 6,50,000</td>
                            </tr>
                            <tr>
                              <th>Payment Amount:</th>
                              <td>INR 6,50,000</td>
                            </tr>
                            <tr>
                              <th>Repayment Term:</th>
                              <td>90 days</td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <h3>Payment Date</h3>
                        <p>Sep 25, 2023</p>
                        <h3>Payment Method</h3>
                        <p>Direct Deposit</p>
                        <h3>Patron of the Payment</h3>
                        <p>Renova Hospital</p>
                        <h3>Recipient of the Payment</h3>
                        <p>ProFinTech Technologies</p>
                        <h3>Repayment Schedule</h3>
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
                        <br />
                        <h3>Payment Agreement</h3>
                        <p>
                          Please review and accept the
                          <a href="#">Payment Agreement</a> for more
                          information.
                        </p>
                        <h3>Contact Information</h3>
                        <p>
                          If you have any questions or need assistance, please
                          contact our customer service at 1-800-123-4567 or
                          email us at info@example.com.
                        </p>
                        <div className="Payment-confirmation">
                          <h3>Payment Confirmation</h3>
                          <p>
                            Payment has been made by Apollo Hospital to
                            ProFinTech Technologies. Confirmation Number:
                            ABD2510
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
      </Request1>
      <div style={{ marginTop: "65vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Payment;

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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import NavbarSide from "../pages/NavbarSide";
import Footer from "../pages/Footer";

function Disbursement() {
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
        <div className="button1">
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
            className="btn1"
            onClick={() => {
              navigate("/disbursement");
            }}
          >
            Disbursement
          </button>

          <button
            className="btn"
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
                      <div style={{ marginLeft: "15px" }}>IKF Finance</div>
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
                      <div style={{ marginLeft: "15px" }}>IKF Finance</div>
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
                      <div className="panel-body" style={{ display: "block" }}>
                        <h3 align="center">Acknowledgement of Disbursement</h3>
                        <p align="center">
                          The Finance partner has made the disbursement
                          successfully, Below are the details of Disbursement.
                        </p>
                        <h3>Disbursement details</h3>
                        <p>
                          <strong>Reference:</strong>123
                        </p>
                        <p>
                          <strong>Finance Request ID:</strong> 1580147
                        </p>
                        <p>
                          <strong>SubGroup ID:</strong> Subgroup 1
                        </p>
                        <p>
                          <strong>Disbursement amount:</strong> ₹ 3,00,766
                        </p>
                        <br />
                        <h3>Bank Details</h3>
                        <p>
                          Below are the bank details to which the disbursement
                          has been made
                        </p>
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
                        <button
                          id="disbursement-upload-button-1"
                          onclick="confirmBtn(1)"
                          className="btn"
                        >
                          Confirm Disbursement
                        </button>
                        <p
                          id="confirm-btn-notification-1"
                          style={{ color: "blue" }}
                        />

                        <p />
                        <div className="select-btn-container" />
                        <div className="accept-message" />
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
                      <div style={{ marginLeft: "15px" }}>IKF Finance</div>
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
                      <div style={{ marginLeft: "15px" }}>IKF Finance</div>
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
                      <div className="panel-body" style={{ display: "block" }}>
                        <h3 align="center">Acknowledgement of Disbursement</h3>
                        <p align="center">
                          The Finance partner has made the disbursement
                          successfully, Below are the details of Disbursement.
                        </p>
                        <h3>Disbursement details</h3>
                        <p>
                          <strong>Reference:</strong>456
                        </p>
                        <p>
                          <strong>Finance Request ID:</strong> 1580147
                        </p>
                        <p>
                          <strong>SubGroup ID:</strong> Subgroup 2
                        </p>
                        <p>
                          <strong>Disbursement amount:</strong> ₹ 4,01,396.9
                        </p>
                        <br />
                        <h3>Bank Details</h3>
                        <p>
                          Below are the bank details to which the disbursement
                          has been made
                        </p>
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
                        <button
                          id="disbursement-upload-button-2"
                          onclick="confirmBtn(2)"
                          className="btn"
                        >
                          Confirm Disbursement
                        </button>
                        <p
                          id="confirm-btn-notification-2"
                          style={{ color: "blue" }}
                        />
                        <p style={{ color: "green" }}>
                          Confirmed Disbursement successfully
                        </p>
                        <p />
                        <div className="select-btn-container" />
                        <div className="accept-message" />
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

export default Disbursement;

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
    margin-left: 500px;
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

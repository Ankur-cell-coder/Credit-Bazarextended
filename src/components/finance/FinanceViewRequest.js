import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbarfinancer from "../pages/Navbarfinancer";
import NavbarsideFinance from "../pages/NavbarsideFinance";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import { useCount } from "../../context/count";

function FinanceViewRequest() {
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);

  const { setData1 } = useCount();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [selection1, setSelection1] = useState({});
  const [selection2, setSelection2] = useState({
    value: "",
    amount: "",
    margin: "",
    interest: "",
    terms: "",
  });
  const [selection3, setSelection3] = useState({
    value: "",
    amount: "",
    margin: "",
    interest: "",
    terms: "",
  });
  const [selection4, setSelection4] = useState({
    value: "",
    amount: "",
    margin: "",
    interest: "",
    terms: "",
  });

  const [value1, setValue1] = useState("");
  const [amount1, setAmount1] = useState("");
  const [margin1, setMargin1] = useState("");
  const [interest1, setInterest1] = useState("");
  const [terms1, setTerms1] = useState("");

  const [value2, setValue2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [margin2, setMargin2] = useState("");
  const [interest2, setInterest2] = useState("");
  const [terms2, setTerms2] = useState("");

  const [value3, setValue3] = useState("");
  const [amount3, setAmount3] = useState("");
  const [margin3, setMargin3] = useState("");
  const [interest3, setInterest3] = useState("");
  const [terms3, setTerms3] = useState("");

  const [value4, setValue4] = useState("");
  const [amount4, setAmount4] = useState("");
  const [margin4, setMargin4] = useState("");
  const [interest4, setInterest4] = useState("");
  const [terms4, setTerms4] = useState("");

  const handleClick = () => {
    setLoad(!load);
  };

  useEffect(() => {
    const updatedSelection = {
      value: value1,
      amount: amount1,
      margin: margin1,
      interest: interest1,
      terms: terms1,
    };

    setSelection1(updatedSelection);
  }, [value1, amount1, margin1, interest1, terms1]);

  useEffect(() => {
    const updatedSelection = {
      value: value2,
      amount: amount2,
      margin: margin2,
      interest: interest2,
      terms: terms2,
    };

    setSelection2(updatedSelection);
  }, [value2, amount2, margin2, interest2, terms2]);

  const handleOffer1 = () => {
    setData1(selection1);
    navigate("/finance_offers");
  };

  const handleOffer2 = () => {
    setData1(selection2);
    navigate("/finance_offers");
  };

  const handleOffer3 = () => {
    setSelection3({
      value: value3,
      amount: amount3,
      margin: margin3,
      interest: interest3,
      terms: terms3,
    });
  };

  const handleOffer4 = () => {
    setSelection4({
      value: value4,
      amount: amount4,
      margin: margin4,
      interest: interest4,
      terms: terms4,
    });
  };

  const handleToogle1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  const handleToogle2 = () => {
    setOpen1(false);
    setOpen2(!open2);
    setOpen3(false);
    setOpen4(false);
  };

  const handleToogle3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(!open3);
    setOpen4(false);
  };
  const handleToogle4 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(!open4);
  };

  return (
    <>
      <Navbarfinancer />
      <NavbarsideFinance />
      <Finance1>
        <div className="button">
          <button
            className="btn1"
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
            className="btn"
            onClick={() => {
              navigate("/finance_settlement");
            }}
          >
            Settlement
          </button>
        </div>
        {!load ? (
          <div className="main-content">
            <div id="myElement">
              <h1> Finance Request</h1>
              <div className="record-details">
                <table>
                  <tbody>
                    <tr>
                      <th>Request ID</th>
                      <td>123456</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td> 20/06/2023 </td>
                    </tr>
                    <tr>
                      <th> Requested Amount</th>
                      <td> INR 4,00,000</td>
                    </tr>
                    <tr>
                      <th> Status</th>
                      <td> In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2> Trade Documents</h2>
              <div className="record-details">
                <table>
                  <tbody>
                    <tr>
                      <th>Trade Document</th>
                      <th>Subgroup ID</th>
                      <th>Seller GST</th>
                      <th>Buyer Name</th>
                      <th>Buyer GST</th>
                      <th>Trade Amount</th>
                      <th>Invoice ID</th>
                    </tr>
                    <tr>
                      <td>Trade Document 1</td>
                      <td>Subgroup 3</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital3</td>
                      <td>123-45-5373</td>
                      <td>₹90,000.00</td>
                      <td>INV001</td>
                    </tr>
                    <tr>
                      <td>Trade Document 2</td>
                      <td>Subgroup 3</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital3</td>
                      <td>123-45-5373</td>
                      <td>₹20,000.00</td>
                      <td>INV002</td>
                    </tr>
                    <tr>
                      <td>Trade Document 3</td>
                      <td>Subgroup 3</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital3</td>
                      <td>123-45-5373</td>
                      <td>₹30,000.00</td>
                      <td>INV003</td>
                    </tr>
                    <tr>
                      <td>Trade Document 4</td>
                      <td>Subgroup 4</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Medical Univ. 1</td>
                      <td>123-45-2486</td>
                      <td>₹40,000.00</td>
                      <td>INV004</td>
                    </tr>
                    <tr>
                      <td>Trade Document 5</td>
                      <td>Subgroup 4</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Medical Univ. 1</td>
                      <td>123-45-2486</td>
                      <td>₹50,000.00</td>
                      <td>INV005</td>
                    </tr>
                    <tr>
                      <td>Trade Document 7</td>
                      <td>Subgroup 4</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Medical Univ. 1</td>
                      <td>123-45-2486</td>
                      <td>₹30,000.00</td>
                      <td>INV006</td>
                    </tr>
                    <tr>
                      <td>Trade Document 8</td>
                      <td>Subgroup 4</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Medical Univ. 1</td>
                      <td>123-45-2486</td>
                      <td>₹40,000.00</td>
                      <td>INV007</td>
                    </tr>
                    <tr>
                      <td>Trade Document 6</td>
                      <td>Subgroup 1</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital 1</td>
                      <td>123-45-5454</td>
                      <td>₹20,000.00</td>
                      <td>INV008</td>
                    </tr>
                    <tr>
                      <td>Trade Document 9</td>
                      <td>Subgroup 2</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital 2</td>
                      <td>123-45-5919</td>
                      <td>₹50,000.00</td>
                      <td>INV009</td>
                    </tr>
                    <tr>
                      <td>Trade Document 10</td>
                      <td>Subgroup 2</td>
                      <td>36AAIFP3688H1ZS</td>
                      <td>Hospital 2</td>
                      <td>123-45-5919</td>
                      <td>₹90,000.00</td>
                      <td>INV0010</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="btn-container">
              <button className="btnn" onClick={handleClick}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="headingcontent">Place an offer</div>

            {open1 ? (
              <div className="topcontent">
                <button onClick={handleToogle1} className="handlebutton">
                  SubGroup 1
                </button>

                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="subgroup1">Subgroup Value</label>
                    <input
                      type="string"
                      id="value1"
                      placeholder="INR 20,000"
                      value={value1}
                      name="value1"
                      onChange={(e) => setValue1(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount1">Amount</label>
                    <input
                      type="string"
                      id="amount1"
                      placeholder="Enter the Amount"
                      value={amount1}
                      name="amount1"
                      onChange={(e) => setAmount1(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="margin1">Margin</label>
                    <input
                      type="text"
                      id="margin1"
                      placeholder="Enter the Margin"
                      value={margin1}
                      name="margin1"
                      onChange={(e) => setMargin1(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest1">Interest</label>
                    <input
                      type="string"
                      id="interest1"
                      placeholder="Enter the Interest"
                      value={interest1}
                      name="interest1"
                      onChange={(e) => setInterest1(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terms1">Terms (In Days)</label>
                    <input
                      type="number"
                      id="terms1"
                      placeholder="Enter the Terms"
                      value={terms1}
                      name="terms1"
                      onChange={(e) => setTerms1(e.target.value)}
                    />
                  </div>

                  <button className="btnn1 btn-primary" onClick={handleOffer1}>
                    Place an Offer
                  </button>
                  <button className="btnn1 btn-primary" onClick={handleClick}>
                    Back
                  </button>
                  <button className="btnn1 btn-primary">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="topcontent">
                <button onClick={handleToogle1} className="handlebutton">
                  SubGroup 1
                </button>
              </div>
            )}

            {open2 ? (
              <div className="topcontent">
                <button onClick={handleToogle2} className="handlebutton">
                  SubGroup 2
                </button>

                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="subgroup2">Subgroup Value</label>
                    <input
                      type="string"
                      id="value2"
                      placeholder="INR 20,000"
                      value={value2}
                      name="value2"
                      onChange={(e) => setValue2(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount2">Amount</label>
                    <input
                      type="string"
                      id="amount2"
                      placeholder="Enter the Amount"
                      value={amount2}
                      name="amount2"
                      onChange={(e) => setAmount2(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="margin2">Margin</label>
                    <input
                      type="text"
                      id="margin2"
                      placeholder="Enter the Margin"
                      value={margin2}
                      name="margin2"
                      onChange={(e) => setMargin2(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest2">Interest</label>
                    <input
                      type="string"
                      id="interest2"
                      placeholder="Enter the Interest"
                      value={interest2}
                      name="interest2"
                      onChange={(e) => setInterest2(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terms2">Terms (In Days)</label>
                    <input
                      type="number"
                      id="terms2"
                      placeholder="Enter the Terms"
                      value={terms2}
                      name="terms2"
                      onChange={(e) => setTerms2(e.target.value)}
                    />
                  </div>

                  <button className="btnn1 btn-primary" onClick={handleOffer2}>
                    Place an Offer
                  </button>
                  <button className="btnn1 btn-primary" onClick={handleClick}>
                    Back
                  </button>
                  <button className="btnn1 btn-primary">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="topcontent">
                <button onClick={handleToogle2} className="handlebutton">
                  SubGroup 2
                </button>
              </div>
            )}
            {open3 ? (
              <div className="topcontent">
                <button onClick={handleToogle3} className="handlebutton">
                  SubGroup 3
                </button>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="subgroup1">Subgroup Value</label>
                    <input
                      type="number"
                      id="subgroup1"
                      placeholder="INR 1,40,000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount1">Amount</label>
                    <input
                      type="text"
                      id="amount1"
                      placeholder="Enter the Amount"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="margin1">Margin</label>
                    <input
                      type="text"
                      id="margin1"
                      placeholder="Enter the Margin"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest1">Interest</label>
                    <input
                      type="password"
                      id="interest1"
                      placeholder="Enter the Interest"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terms1">Terms (In Days)</label>
                    <input
                      type="number"
                      id="terms1"
                      placeholder="Enter the Terms"
                    />
                  </div>
                  <button className="btnn1 btn-primary">Place an Offer</button>
                  <button className="btnn1 btn-primary" onClick={handleClick}>
                    Back
                  </button>
                  <button className="btnn1 btn-primary">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="topcontent">
                <button onClick={handleToogle3} className="handlebutton">
                  SubGroup 3
                </button>
              </div>
            )}
            {open4 ? (
              <div className="topcontent">
                <button onClick={handleToogle4} className="handlebutton">
                  SubGroup 4
                </button>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="subgroup1">Subgroup Value</label>
                    <input
                      type="number"
                      id="subgroup1"
                      placeholder="INR 20,000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount1">Amount</label>
                    <input
                      type="text"
                      id="amount1"
                      placeholder="Enter the Amount"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="margin1">Margin</label>
                    <input
                      type="text"
                      id="margin1"
                      placeholder="Enter the Margin"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest1">Interest</label>
                    <input
                      type="password"
                      id="interest1"
                      placeholder="Enter the Interest"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terms1">Terms (In Days)</label>
                    <input
                      type="number"
                      id="terms1"
                      placeholder="Enter the Terms"
                    />
                  </div>
                  <button className="btnn1 btn-primary">Place an Offer</button>
                  <button className="btnn1 btn-primary" onClick={handleClick}>
                    Back
                  </button>
                  <button className="btnn1 btn-primary">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="topcontent">
                <button onClick={handleToogle4} className="handlebutton">
                  SubGroup 4
                </button>
              </div>
            )}
          </div>
        )}
      </Finance1>
      <div style={{ marginTop: "30vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default FinanceViewRequest;

const Finance1 = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 268px;

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .handlebutton {
    width: 500px;
    height: 50px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 32px;
  }
  .btnn1 {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    border-radius: 10px;
    margin-left: 20px;
    font-size: 22px;
    background-color: blue;
  }
  .content {
    margin-top: 50px; /* Adjust the margin to move content down */
    padding: 20px;
  }
  .details {
    margin-bottom: 50px;
  }
  .offer-details {
    background-color: #f8f9fa;
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
  .btnn {
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    text-decoration: none;
    // border-radius: 5px;
    display: inline-block;
    font-size: 20px;
    margin-top: 10vh;
    width: 100px;
    margin-left: -80px;
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
  .main-content {
    margin-top: 40px;
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
  .table-container {
    margin-top: 20px;
  }
  table {
    width: 90%;
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
  .headingcontent {
    font-size: 36px;
    margin-top: 40px;
    margin-left: 40%;
  }
`;

import React, { useState } from "react";
import { styled } from "styled-components";
import Navbarseller from "../pages/Navbarseller";
import Footer from "../pages/Footer";
import NavbarSide from "../pages/NavbarSide";

const data = [
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Apollo Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 4,50,000",
  },
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Renova Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 3,00,000",
  },
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Renova Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 3,50,000",
  },
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Apollo Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 4,50,000",
  },
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Apollo Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 1,50,000",
  },
  {
    sellergst: "36AAIFP3688H1ZS",
    buyer: "Apollo Hospital",
    buyergst: "36AAACA5443N2ZI",
    amount: "	INR 6,50,000",
  },
];

function Trades() {
  const [open, setOpen] = useState(false);
  const [sellergst, setSellergst] = useState("");
  const [sellername, setSellername] = useState("");
  const [buyergst, setBuyergst] = useState("");
  const [amount, setAmount] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({
    sellergst: sellergst,
    buyer: sellername,
    buyergst: buyergst,
    amount: amount
    })

    setOpen(!open);

  };

  return (
    <>
      <NavbarSide />
      <Navbarseller />

      <Trade1>
        {!open ? (
          <div className="container">
            <div className="search-container">
             
              <div
                className="button"
                
                onClick={handleClick}
              >
                <button className="btn">Add New Trades</button>
              </div>
            </div>
            <div className="header">
              <h1>Trades</h1>
              <p>Lists Of Trades.</p>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Seller GST</th>
                  <th>Buyer Name</th>
                  <th>Buyer GST</th>
                  <th>Trade Amount</th>
                  <th>Trade ID</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, i) => {
                  return (
                    <tr>
                      <td>{val.sellergst}</td>
                      <td>{val.buyer}</td>
                      <td>{val.buyergst}</td>
                      <td>{val.amount}</td>
                      <td>T00{i+1}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="formcontainer">
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="sellergst" >
                Seller GST:
              </label>
              <br />
              <input
                type="txt"
                value={sellergst}
                onChange={(e) => setSellergst(e.target.value)}
                id="sellergst"
                name="sellergst"
                required
              />
              <br />

              <label htmlFor="sellername" >
                Seller Name:
              </label>
              <br />
              <input
                type="txt"
                value={sellername}
                onChange={(e) => setSellername(e.target.value)}
                id="sellername"
                name="sellername"
                required
              />
              <br />

              <label htmlFor="buyergst" >
                Buyer GST:
              </label>
              <br />
              <input
                type="txt"
                value={buyergst}
                onChange={(e) => setBuyergst(e.target.value)}
                id="buyergst"
                name="buyergst"
                required
              />
              <br />

              <label htmlFor="amount" >
                Trade Amount:
              </label>
              <br />
              <input
                type="txt"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="amount"
                name="amount"
                required
              />
              <br />

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </Trade1>
      <div style={{ marginTop: "60vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Trades;

const Trade1 = styled.div`
  margin-left: 10vh;
  padding-top:140px;
  display:flex;
  justify-content:center;


  .formwrap {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #e5e4e2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  .formcontainer{
  
    border:2px solid orange;
    border-radius:5px;
    width:50%;
    background:#C5C6D0;
    
  }

  button[type="submit"] {
    font-size: 20px;
    color: white;
    height: 40px;
    width: 25%;
    margin-bottom: 20px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  input[type="txt"] {
    height: 50px;
    width: 500px;
    margin-bottom: 20px;
    padding: 5px;
    border:2px solid black;
    border-radius:10px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:40px;
    background:#C5C6D0;
  }
  label {
    font-weight: bold;
    font-size:30px;
    margin-bottom: 5px;
    color: orange;
  }

  .container {
    width: 80%;
    margin: auto;
   
  }

 

  .header {
    text-align: center;
    padding: 20px;
    color: #333;
    margin-top: 10px; /* Adjust the margin-top value to decrease or increase the space */
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th,
  .table td {
    border: 1px solid #ccc;
    padding: 5px;
  }
  .table th {
    background-color: #f7f7f7;
    font-weight: bold;
  }
  .table td {
    text-align: center;
  }
  .btn {
    color: white;
    background-color: orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-left:89%;
  }
  .btn:hover {
    background-color: #0056b3;
  }

`;

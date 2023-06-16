import { React, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  //personal details section
  const [name, setName] = useState(location.state.name);
  const [companyName, setCompanyName] = useState(location.state.companyName);
  const [companygst, setCompanyGst] = useState("");
  const [phone, setPhone] = useState(location.state.number);
  const [email, setEmail] = useState(location.state.email);

  //bank details section
  const [accountNo, setAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [receipientName, setReceipientName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");

  const [defaultRole, setDefaultRole] = useState("seller");
  const handleNavigate = (res) => {
    setDefaultRole(res.data.user.role);
    if (defaultRole === "seller") {
      navigate("/sellersdashboard");
    } else if (defaultRole === "buyer") {
      navigate("/buyersdashboard");
    } else {
      navigate("/financesdashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/add-details", {
        id: `${location.state.id}`,
        defaultRole,
      });
      if (res.data.success) {
        alert(res.data.message);
        handleNavigate(res);
      } else {
        alert(res.data.message);
        handleNavigate(res);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <User1>
      <div className="formwrap">
        <div className="content">Welcome To User Profile Page!</div>

        <form className="form" onSubmit={handleSubmit}>
          {/* //personal details section */}
          <div className="pdetail">
            <h2>Personal Details:</h2>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="name"
              value={name}
             readOnly
             // setname(e.target.value)}
              id="name"
              name="name"
              required
            />
            <br />

            <label htmlFor="companyName">Comapny Name:</label>
            <br />
            <input
              type="companyName"
              value={companyName}
             readOnly
             // setCompanyName(e.target.value)}
              id="companyName"
              name="companyName"
              required
            />
            <br />

            <label htmlFor="companygst">Comapny GST ID:</label>
            <br />
            <input
              type="companygst"
              value={companygst}
              onChange={(e) => setCompanyGst(e.target.value)}
              id="companygst"
              name="companygst"
              required
            />
            <br />

            <label htmlFor="phone">Phone Number:</label>
            <br />
            <input
              type="phone"
              value={phone}
             readOnly
             // setPhone(e.target.value)}
              id="phone"
              name="phone"
              required
            />
            <br />

            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              value={email}
             readOnly
             // setemail(e.target.value)}
              id="email"
              name="email"
              required
            />
            <br />
          </div>

          {/* ///Bank detail section///////////////// */}
          <div className="bdetails">
            <h2>Bank Details</h2>
            <label htmlFor="accountNo">Account Number:</label>
            <br />
            <input
              type="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              id="accountNo"
              name="accountNo"
              required
            />
            <br />

            <label htmlFor="ifscCode">IFSC Code:</label>
            <br />
            <input
              type="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              id="ifscCode"
              name="ifscCode"
              required
            />
            <br />

            <label htmlFor="receipientName">Receipient Name:</label>
            <br />
            <input
              type="receipientName"
              value={receipientName}
              onChange={(e) => setReceipientName(e.target.value)}
              id="receipientName"
              name="receipientName"
              required
            />
            <br />

            <label htmlFor="bankName">Bank Name:</label>
            <br />
            <input
              type="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              id="bankName"
              name="bankName"
              required
            />
            <br />

            <label htmlFor="branch">Branch:</label>
            <br />
            <input
              type="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              id="branch"
              name="branch"
              required
            />
            <br />
          </div>

          <div className="persona">
            <h2>Persona</h2>
            <label htmlFor="defaultRole">Select default Persona:</label>
            <br />
            <select
              id="option"
              onChange={(e) => setDefaultRole(e.target.value)}
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyers</option>
              <option value="merchants">Finances</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </User1>
  );
}

export default UserProfile;

const User1 = styled.div`
  padding: 40px;
  .formwrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .content {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form {
    margin-bottom: 20px;
  }

  .pdetail h2,
  .bdetails h2,
  .persona h2 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button[type="submit"] {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }

  .pdetail,
  .bdetails,
  .persona {
    margin-bottom: 30px;
  }
`;

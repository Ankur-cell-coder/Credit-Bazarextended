import { React, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const location = useLocation();
  console.log(location.state.id);

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
        address,
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
          <label htmlFor="address">Please Enter Your Address</label>
          <br />
          <input
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            name="address"
            required
          />
          <br />

          <label htmlFor="defaultRole">Please Select your defaultRole</label>
          <br />

          <select id="option" onChange={(e) => setDefaultRole(e.target.value)}>
            <option value="seller">Seller</option>
            <option value="buyer">Buyers</option>
            <option value="merchants">Finances</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </User1>
  );
}

export default UserProfile;

const User1 = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  margin-top: 30px;

  /* Styles for the form wrapper */
  .formwrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #f0f0f0;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  /* Styles for the welcome text */
  .content {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 60px;
  }

  /* Styles for the form */
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* Styles for the form labels */
  label {
    font-weight: bold;
    margin-bottom: 10px;
    color: #333333;
  }

  /* Styles for the form inputs */
  input[type="address"] {
    height: 40px;
    width: 300px;
    margin-bottom: 20px;
    padding: 5px;
  }

  /* Styles for the select dropdown */
  select {
    height: 40px;
    width: 300px;
    margin-bottom: 20px;
    padding: 5px;
  }

  /* Styles for the submit button */
  button[type="submit"] {
    font-size: 20px;
    color: white;
    height: 40px;
    width: 300px;
    margin-bottom: 20px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Optional hover effect for the submit button */
  button[type="submit"]:hover {
    background-color: #2079b4;
  }

  /* Optional focus effect for the form inputs and select dropdown */
  input:focus,
  select:focus {
    outline: none;
    border-color: #2079b4;
    box-shadow: 0px 0px 5px rgba(32, 121, 180, 0.5);
  }
`;

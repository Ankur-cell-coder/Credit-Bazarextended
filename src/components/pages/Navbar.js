import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/auth";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout successfully");
    navigate("/");
  };

  const handleChange = (e) => {
    if (e.currentTarget.value == "merchants") {
      const win = window.open("http://localhost:3000/tdashboard", "_blank");
      if (win != null) {
        win.focus();
      }
      navigate("/tdashboard");
    } else if (e.currentTarget.value == "seller") {
      const win = window.open("http://localhost:3000/sdashboard", "_blank");
      if (win != null) {
        win.focus();
      }
      navigate("/sdashboard");
    }
  };

  return (
    <Navbar1>
      <div className="rightsection">
        <div>
          <select
            id="option"
            onChange={(e) => handleChange(e)}
            className="options"
          >
            <option value="buyer">Buyers</option>
            <option value="seller">Seller</option>
            <option value="merchants">Merchants</option>
          </select>
        </div>

        <div>
          <button onClick={handleClick} className="login">
            Logout
          </button>
        </div>
      </div>
    </Navbar1>
  );
}

export default Navbar;

const Navbar1 = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  margin-top: -30px;

  .rightsection {
    display: flex;
    width: 400px;
    margin-left: 1400px;
    margin-top: -30px;
    justify-content: space-between;
  }

  .options {
    width: 200px;
    height: 60px;
    font-size: 20px;
    border: 2px solid black;
  }
  .login {
    width: 150px;
    height: 60px;
    font-size: 20px;
  }
  .button {
    margin-left: 20px;
    margin-top: 15px;
    height: 36px;
    background: orange;
    border: 2px solid orange;
    width: 200px;
    font-size: 15px;
  }
`;

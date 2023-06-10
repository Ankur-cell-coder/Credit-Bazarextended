import { React, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function Signin() {
  const navigate = useNavigate();
  const [phoneOrEmail, setphoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/login", {
        phoneOrEmail,
        password,
      });
      if (res.data.success) {
        alert(res.data.message);
        navigate("/sellerdash");
      } else {
        alert(res.data.message);
        navigate("/sellerdash");
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <Sign1>
      <div className="formwrap">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="phoneOrEmail">Phone or Email</label>
          <br />
          <input
            type="txt"
            value={phoneOrEmail}
            onChange={(e) => setphoneOrEmail(e.target.value)}
            style={{ height: "30px", width: "300px", marginBottom: "20px" }}
            id="phoneOrEmail"
            name="phoneOrEmail"
            required
          />
          <br />

          <label htmlFor="name">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="password"
            name="password"
            required
          />
          <br />

          <button
            style={{
              fontsize: "20px",
              color: "white",
              height: "40px",
              width: "100%",
              marginBottom: "20px",
              backgroundColor: "#3498DB",
              border: "none",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>

        <div>
          Don't have an account?
          <Link to="/signup">Signup for free</Link>
        </div>
      </div>
    </Sign1>
  );
}

export default Signin;

const Sign1 = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  margin-top: 300px;

  .formwrap {
    width: 600px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
  }
  .form {
    width: 310px;
  }
`;

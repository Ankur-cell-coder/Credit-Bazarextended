import { React, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";

function Signin() {
  const [role, setRole] = useState("seller");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const [numberOrEmail, setnumberOrEmail] = useState("");
  const [password, setPassword] = useState("");

  //routing
  const handleNavigate = (res) => {
    setRole(res.data.user.userDetails.defaultRole);

    if (res.data.user.userDetails.defaultRole === "seller") {
      navigate("/sellersdashboard");
    } else if (res.data.user.userDetails.defaultRole === "buyer") {
      navigate("/buyersdashboard");
    } else {
      navigate("/tradersdashboard");
    }
  };

  ///login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/login", {
        numberOrEmail,
        password,
      });
      console.log(res.data.user);
      if (res.data.success) {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log({ auth });
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log("successfull");
        handleNavigate(res);
      } else {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log({ auth });
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log("successfull");

        handleNavigate(res);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <Sign1>
      <div className="formwrap">
        <div className="content">Welcome To Login Page</div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="numberOrEmail" style={{marginLeft:'-90px'}}>Registered Number or Email</label>
          <br />
          <input
            type="txt"
            value={numberOrEmail}
            onChange={(e) => setnumberOrEmail(e.target.value)}
            id="numberOrEmail"
            name="numberOrEmail"
            required
          />
          <br />

          <label htmlFor="name" style={{marginLeft:'-225px'}}>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>

        <div>
          Don't have an account?
          <Link to="/signup">Signup for free</Link>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Link to={"/forgotpassword"}>Forgot Password ?</Link>
        </div>
      </div>
    </Sign1>
  );
}

export default Signin;

const Sign1 = styled.div`
  display: flex;
  justify-content: center;
  /* Styles for the page background */
  body {
    background-color: #e5e4e2;
  }

  /* Styles for the form wrapper */
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

  /* Styles for the content */
  .content {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 80px;
  }

  /* Styles for the form */
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Styles for the form labels */
  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333333;
  }

  /* Styles for the form inputs */
  input[type="txt"],
  input[type="password"] {
    height: 30px;
    width: 300px;
    margin-bottom: 20px;
    padding: 5px;
  }

  /* Styles for the submit button */
  button[type="submit"] {
    font-size: 20px;
    color: white;
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Styles for the "Don't have an account?" and "Forgot Password?" links */
  div > a {
    margin-top: 20px;
    text-decoration: none;
    color: orange;
  }

  /* Optional hover effect for links */
  div > a:hover {
    text-decoration: underline;
  }
`;

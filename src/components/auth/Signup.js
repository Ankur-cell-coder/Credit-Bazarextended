import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Footer from "../pages/Footer";

function Signup() {
  const [auth, setAuth] = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/user/signup`, {
        firstName,
        lastName,
        number,
        email,
        password,
      });
      if (res.data.success) {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/profile", {
          state: {
            id: res.data.user.id,
            email: email,
            number: number,
            firstName: firstName,
            lastName: lastName,
          },
        });
      } else {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/profile", {
          state: {
            id: res.data.user.id,
            email: email,
            number: number,
            firstName: firstName,
            lastName: lastName,
          },
        });
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <Sign1>
        <div className="formwrap">
          <div style={{ marginBottom: "40px" }}>Welcome To SignUp Page</div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="firstName" style={{ marginLeft: "-212px" }}>
              First Name
            </label>
            <br />
            <input
              type="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              required
            />
            <br />

            <label htmlFor="lastName" style={{ marginLeft: "-200px" }}>
              Last Name
            </label>
            <br />
            <input
              type="name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              required
            />
            <br />

            <label htmlFor="number" style={{ marginLeft: "-206px" }}>
              Phone Number
            </label>
            <br />
            <input
              type="name"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              id="number"
              name="number"
              required
            />
            <br />

            <label htmlFor="email" style={{ marginLeft: "-259px" }}>
              Email
            </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              required
            />
            <br />

            <label htmlFor="password" style={{ marginLeft: "-242px" }}>
              Password
            </label>
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
            have an account?
            <Link to="/">Login for free</Link>
          </div>
        </div>
      </Sign1>
      <div style={{ marginTop: "20vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Signup;

const Sign1 = styled.div`
  /* Styles for the page background */
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  body {
    background-color: #e5e4e2;
  }

  /* Styles for the form wrapper */
  .formwrap {
    display: flex;
    width: 600px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #e5e4e2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  /* Styles for the welcome text */
  .formwrap > div:first-child {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
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
    margin-bottom: 5px;
    display: flex;
    color: #333333;
  }

  /* Styles for the form inputs */
  input[type="name"],
  input[type="number"],
  input[type="email"],
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
    width: 320px;
    margin-bottom: 20px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Styles for the "have an account?" and "Login for free" links */
  div > a {
    margin-top: 10px;
    text-decoration: none;
    color: orange;
  }

  /* Optional hover effect for links */
  div > a:hover {
    text-decoration: underline;
  }
`;

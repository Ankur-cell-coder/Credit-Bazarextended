import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reset() {
  const [email, setEmail] = useState("");
  const [resetToken, setResettoken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    setResettoken(token);
  }, []);

  console.log(resetToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/user/reset-password`,
        {
          email,
          resetToken,
          newPassword,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        navigate("/");
      } else {
        alert(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <Sign1>
      <div className="formwrap">
        <div className="contentmain">Welcome To Reset Password Page!</div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Please Enter your registered Email</label>
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

          <label htmlFor="newPassword">Please Enter New Password</label>
          <br />
          <input
            type="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="newPassword"
            name="newPassword"
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </Sign1>
  );
}

export default Reset;

const Sign1 = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;

  /* Styles for the form wrapper */
  .formwrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #e5e4e2;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  /* Styles for the welcome text */
  .contentmain {
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
  input[type="email"],
  input[type="newPassword"] {
    height: 40px;
    width: 300px;
    margin-bottom: 10px;
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

  /* Optional focus effect for the form inputs */
  input:focus {
    outline: none;
    border-color: #2079b4;
    box-shadow: 0px 0px 5px rgba(32, 121, 180, 0.5);
  }
`;

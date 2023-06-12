import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reset() {
  const [email, setEmail] = useState("");
  const [resetToken, setResettoken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate=useNavigate();


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
        "http://localhost:3005/user/reset-password",
        {
          email,
          resetToken,
          newPassword,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        navigate('/')
      } else {
        alert(res.data.message);
        navigate('/');
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
          <label htmlFor="email">Please Enter your registered Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "30px", width: "300px", marginBottom: "20px" }}
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
            style={{ height: "30px", width: "300px", marginBottom: "20px" }}
            id="newPassword"
            name="newPassword"
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
      </div>
    </Sign1>
  );
}

export default Reset;

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

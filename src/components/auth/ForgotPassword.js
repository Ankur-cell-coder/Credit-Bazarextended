import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/forgot-password", {
        email,
      });
      if (res.data.success) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };


  return (
    <Sign1>
     
      <div className="formwrap">
      <div className="content" style={{marginBottom:"80px"}}>Welcome To Forgot Password Page!</div>
         <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" style={{marginLeft:"-250px"}}>Please Enter your registered Email</label>
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


          <button
          
            type="submit"
          >
            Submit
          </button>
        </form>

       
      </div>
    </Sign1>
  );
}

export default ForgotPassword;

const Sign1 = styled.div`
display:flex;
justify-content:center;
/* Styles for the page background */
body {
  background-color: #e5e4e2;
}

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
.content {
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
  margin-bottom: 10px;
  color: #333333;
}

/* Styles for the form inputs */
input[type="email"] {
  height: 40px;
  width: 500px;
  margin-bottom: 20px;
  padding: 5px;
}

/* Styles for the submit button */
button[type="submit"] {
  font-size: 20px;
  color: white;
  height: 40px;
  width: 500px;
  margin-bottom: 20px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Styles for the "Forgot Password" link */
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

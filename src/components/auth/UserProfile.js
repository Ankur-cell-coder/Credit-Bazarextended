import { React, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function UserProfile() {
  const navigate = useNavigate();
  const [address,setAddress]=useState("");
  const [role,setRole]=useState("");

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(role=='seller')
    {
      navigate('/sdashboard')
    }
    else if(role=="buyer")
    {
      navigate('/bdashboard');
    }
    else{
      navigate('/tdashboard');
    }

    try {
      const res = await axios.post("http://localhost:3005/user/login", {
        address,
        role,
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
    <User1>
      <div className="formwrap">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ height: "30px", width: "300px", marginBottom: "20px" }}
            id="address"
            name="address"
            required
          />
          <br />

          <label htmlFor="role">Please Select your role</label>
          <br />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="role"
            name="role"
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
    </User1>
  );
}

export default UserProfile;

const User1 = styled.div`
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

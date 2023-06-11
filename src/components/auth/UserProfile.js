import { React, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function UserProfile() {
  const navigate = useNavigate();
  const [address,setAddress]=useState("");

  const location = useLocation()
  console.log(location.state.id);

  const [defaultRole,setDefaultRole]=useState("");
  const handleNavigate=(res)=>{
    setDefaultRole(res.data.user.role);
    if(defaultRole==='seller')
    {
      navigate('/sdashboard')
    }
    else if(defaultRole==="buyer")
    {
      navigate('/bdashboard');
    }
    else{
      navigate('/tdashboard');
    }
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3005/user/add-details", {
        id:`${location.state.id}`,
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

          <label htmlFor="defaultRole">Please Select your defaultRole</label>
          <br />
          <input
            type="text"
            value={defaultRole}
            onChange={(e) => setDefaultRole(e.target.value)}
            style={{
              height: "30px",
              width: "300px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "2px",
            }}
            id="defaultRole"
            name="defaultRole"
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

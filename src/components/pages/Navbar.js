import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  { styled } from "styled-components";

function Navbar() {
    const navigate=useNavigate();
    const handleClick=()=>{
        alert('Logout successfully');
        navigate('/');
    }
   
  const [role,setRole]=useState("seller");

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


  return (
    <Navbar1>
      <div className="leftcontent">Credit Bazar</div>

      <div className="rightsection">
        <div className="options">
          <select id="users">
            <option value="seller">Seller</option>
            <option value="buyers">Buyers</option>
            <option value="merchants">Merchants</option>
          </select>
        </div>
        <div className="login">
        <button onClick={handleClick}>Logout</button>
        </div>
      </div>
    </Navbar1>
  );
}

export default Navbar;

const Navbar1 = styled.div`
border:2px solid black;
display:flex;
height:80px;
justify-content:space-between;

 .rightsection{
    display:flex;
    width:300px;
    justify-content:space-between;
    margin-right:20px;
    margin-top:30px;

 }

`;

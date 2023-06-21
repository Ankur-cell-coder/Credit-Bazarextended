import React,{ useState } from 'react'
import { styled } from 'styled-components'
import Footer from './pages/Footer';
import NavbarSide from './pages/NavbarSide';
import Navbarseller from './pages/Navbarseller';
import { useNavigate } from 'react-router-dom';

function Request_offers() {
    const navigate=useNavigate();
  return (
    <>
    <Navbarseller/>
    <NavbarSide/>
    <Request1>
    
   <div className="table-container">
   <div className="buttoncontainer">
        <button className="btn1" onClick={()=>{navigate('/offer-request')}}>New Request For Finance</button>
        <button className="btn2">Finance Request</button>
    </div>
  <table>
    <thead>
      <tr>
        <th>Request ID</th>
        <th>Trades</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Offers</th>
        <th>Disbursement</th>
        <th>Settlement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><button onClick={()=>{navigate('/request_information')}}>12345</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 10,000</td>
        <td>Approved</td>
        <td>2</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/request_information')}}>54321</button></td>
        <td>Trade 1 &amp; 3</td>
        <td>INR 15,000</td>
        <td>Pending Approval</td>
        <td>1</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      {/* <tr>
        <td><button onClick={()=>{navigate('/trades')}}>98765</button></td>
        <td>Trade 4 &amp; 5</td>
        <td>INR 20,000</td>
        <td>Approved</td>
        <td>3</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>67890</button></td>
        <td>Trade 3 &amp; 4</td>
        <td>INR 12,500</td>
        <td>Approved</td>
        <td>2</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>45678</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 8,000</td>
        <td>Rejected</td>
        <td>0</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>23456</button></td>
        <td>Trade 1 &amp; 3</td>
        <td>INR 14,000</td>
        <td>Pending Approval</td>
        <td>1</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>78901</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 18,000</td>
        <td>Approved</td>
        <td>2</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>34567</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 11,500</td>
        <td>Pending Approval</td>
        <td>0</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>87654</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 9,500</td>
        <td>Approved</td>
        <td>1</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><button onClick={()=>{navigate('/trades')}}>54321</button></td>
        <td>Trade 1 &amp; 2</td>
        <td>INR 16,000</td>
        <td>Rejected</td>
        <td>0</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr> */}
    </tbody>
  </table>
</div>


    </Request1>
    <div style={{marginTop:"220px"}}>
    <Footer/>
    </div>
    </>
  )
}

export default Request_offers




const Request1=styled.div`


   width:100vh;
   margin-left:320px;
  

.top-bar {
    background-color: #007BFF;
    color: #ffffff;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.logo {
    font-size: 24px;
    font-weight: bold;
    margin-right: auto;
}
.profile-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 10px;
    background-color: #ffffff;
}
.content {
    display: flex;
    margin-top: 20px;
}
.side-nav {
    background-color: #F8F9FA;
    width: 150px;
    padding: 20px;
}
.side-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.side-nav li {
    margin-bottom: 10px;
}
.side-nav a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}
.side-nav a:hover {
    background-color: #007BFF;
    color: #ffffff;
}
.main-content {
    padding: 20px;
}
.table-container {
    margin-top:-420px;
    @media only screen and (min-width: 1800px){
        margin-top:-520px;
      }
}
table {
    width: 150%;
    border-collapse: collapse;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
}
th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
}
th {
    background-color: #F8F9FA;
    font-weight: bold;
}

`;




import React from 'react'
import { styled } from 'styled-components'
import Footer from '../pages/Footer';
import NavbarsideFinance from '../pages/NavbarsideFinance';
import Navbarfinancer from '../pages/Navbarfinancer';
import { useNavigate } from 'react-router-dom';

function FinanceRequest() {
    const navigate=useNavigate();
  return (
    <>
    <Navbarfinancer/>
    <NavbarsideFinance/>
    
     <Finance1>
         <div className="table-container">
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
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    12345
                  </button>
                </td>
                <td>Trade 1 &amp; 2</td>
                <td>INR 10,000</td>
                <td>Approved</td>
                <td>2</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      navigate("/finance_request_information");
                    }}
                  >
                    54321
                  </button>
                </td>
                <td>Trade 1 &amp; 3</td>
                <td>INR 15,000</td>
                <td>Pending Approval</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
     </Finance1>
     <div style={{marginTop:"40vh"}}>
        <Footer/>
     </div>
     </>
  )
}

export default FinanceRequest

const Finance1=styled.div`
width: 100vh;
display: flex;

flex-direction: column;
justify-content: center;


 
 margin-left:268px;

.main-content {
  padding: 20px;
}
.table-container {
  margin-top: 25vh;
  
}
table {
  width: 150%;
  border-collapse: collapse;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
}
th {
  background-color: #f8f9fa;
  font-weight: bold;
}
.btn {
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 50px;
  width:350px;
  height:50px;
  font-size:20px;
}
.btn:hover {
  background-color: #0056b3;
}
`;



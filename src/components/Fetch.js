import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import EditableRow from './Editable Row';

function Fetch() {

    const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");
   


   // Initiates our fetch request
       useEffect(() => {
    fetch('https://my-json-server.typicode.com/420MORGANJASON/Bank-of-Flatiron1/transactions')
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);




  return (
    <>
    <div>
           <h1>BANK OF FLATIRON</h1>
     
     <input type='text' placeholder='Search' onChange = {e => setQuery(e.target.value)} /> 
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>action</th>
          
        </tr>
      </thead>
      <tbody>
        {transactions.filter(transaction => transaction.description.toLowerCase().includes(query)).map((val) => (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.date}</td>
            <td>{val.description}</td>
            <td>{val.category}</td>
            <td>{val.amount}</td>
            <td><button type='SUBMIT'>EDIT</button>
            <button type='EDIT'>REMOVE</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
   



    <div>
    <form className='FORM1'>
         <input type='date' name='date' placeholder='date' /> 
        <input type='text' name='description' placeholder='description' /> 
         <input type='category' name='text' placeholder='category' /> 
          <input type='amount' name='number' placeholder='amount' /> 
          <button type='Submit'>SUBMIT</button>
         
            </form>
          </div>
</>
              )
            };
               
               
     


             





         

export default Fetch;

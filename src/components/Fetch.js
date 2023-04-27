import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import EditableRow from './Editable Row';

function Fetch() {

    const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
   const [val,setValue]=useState([]);
   const [transactions, setTransactions] = useState([]) (  
  { id: 1, date: '2022-04-01', description: 'Rent', category: 'Housing', amount: 1000 },
  { id: 2, date: '2022-04-02', description: 'Groceries', category: 'Food', amount: 200 },)
  // add more transactions here

   }


  const handleSubmit = (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // get the form input values
  const date = event.target.date.value;
  const description = event.target.description.value;
  const category = event.target.category.value;
  const amount = event.target.amount.value;

  // create a new transaction object with the input values and a new unique id
  const newTransaction = {
    id: transactions.length + 1,
    date,
    description,
    category,
    amount,
  };


   // Initiates our fetch request
       useEffect(() => {
    fetch('https://my-json-server.typicode.com/420MORGANJASON/Bank-of-Flatiron1/transactions')
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);



  // add the new transaction object to the transactions array
  setTransactions([...transactions, newTransaction]);

  // reset the form inputs
  event.target.reset();


  return (
    <>
    <div>
           <h1>BANK OF FLATIRON</h1>
     
     <input type='text' placeholder='Search'/> 
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
        {transactions.filter(transaction => transaction.description.toLowerCase().map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td><button type='SUBMIT'>EDIT</button>
            <button type='EDIT'>REMOVE</button></td>
          </tr>
        )))}
      </tbody>
    </table>
    </div>
   



    <div>
    <form className='FORM1'  onSubmit={handleSubmit}>
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

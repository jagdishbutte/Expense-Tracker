import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES=[
  {id:'e1', title:'Car', amount:240,date:new Date(2022,11,2),},
  {id:'e2', title:'TV', amount:100,date:new Date(2022,11,8),},
  {id:'e3', title:'Insurance', amount:40,date:new Date(2022,11,12),},
  {id:'e4', title:'Book', amount:24,date:new Date(2022,11,20),},

]

const App = () => {
   const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler= expense => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    })
    // console.log("in app.js");
    // console.log(expense);
  }

  return (
    <div>
      <h2>Track your expense.</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    
       
    </div>
  );
}

export default App;

import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  // this function defined in new expense component which we will
  // excute in a diff component inside of expenseform to be precise
  // through this child component (expenseform) can communicate with parent 
  // component (new expense component)

  // we can call a function in the new expense component and can pass data 
  // as a paramenter
  const saveExpenseDataHandler =(enteredExpenseData) => {
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return( 
    <div className='new-expense'>
      {/* <NewExpense /> */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense

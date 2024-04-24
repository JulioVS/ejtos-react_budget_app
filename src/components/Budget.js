import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // FINAL PROJECT: TASK 2
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    //

    const handleBudgetChange = (event) => {
        
        // FINAL PROJECT: TASK 2
        //   Check for budget not surpassing 20.000 -> display error message
        //
        if (event.target.value > 20000) {
            alert("FINAL PROJECT TASK 2: Budget cannot exceed 20.000");
            event.target.value = 20000;
        }
        //   Check for budget not inferior to allocated expenses -> display error message
        //
        if (event.target.value < totalExpenses) {
            alert("FINAL PROJECT TASK 2: Budget cannot be less than already allocated expenses: " + totalExpenses);
            event.target.value = totalExpenses;
        }
        // END TASK 2

        setNewBudget(event.target.value);
    }

    // FINAL PROJECT: TASK 5
    //   Add currency sign to the left of the budget value
    //
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;

//this is child component
import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

function Child() {

    let { transactions, addTransaction , deleteTransaction } = useContext(TransactionContext);

    //working on input
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    //creating function which calls by default event
    const handleSubmit = (event) => {
        event.preventDefault(); //this prevent to reload browser
        if( Number(newAmount) === 0){
            alert("Please enter valid amount.");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: String(newDesc),
            id: transactions.length
        });

       
    }

    function handleDelete(ind) {
        console.log(ind)
        deleteTransaction({
            index: ind
        })
    }


    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    //expense 
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <div>
                <h1 className="text-center">E-xpense Tracker</h1>

                <h2>Your Balance <br/>
                <b>${getIncome() + getExpense()}</b></h2>

                <div className="expense-container">
                    <h3>INCOME <br /> ${getIncome()}</h3>
                    <h3>EXPENSE <br /> ${getExpense()}</h3>
                </div>

                <h3>History</h3>
                <hr />

                <ul className="transaction-list">

                    {transactions.map((transOBj, ind) => {
                        return (
                            <li key={ind}>
                                <span>{transOBj.desc} </span>
                                <span>${transOBj.amount}<button className="crossSign" onClick={() => handleDelete(transOBj.id)}>&#9747;
                                   
                                   </button></span>
                               
                                

                            </li>
                        )
                    })

                    }

                </ul>

                <h3>Add new transaction</h3>
                <hr />

                <form className="transaction-form" onSubmit={handleSubmit}>
                    <label>
                         Description <br />
                        (Expense with '-' sign )
                        <br />
                        <input type="text" value={newDesc} placeholder="Add description" onChange={(ev) => setDesc(ev.target.value)} required />
                    </label>
                    <br />
                    <label>
                       Amout <br />
                        <input type="number" value={newAmount} placeholder="Add amount" onChange={(ev) => setAmount(ev.target.value)} required />
                    </label>
                    <br />
                    <input type="submit" value="Add Transaction" />
                </form>
            </div>
            <span className="Creator">This project is created by Govind Rai © </span>
        </div>
    );
}

export default Child;

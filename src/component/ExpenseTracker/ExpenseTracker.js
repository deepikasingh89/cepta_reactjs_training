import React, { useContext } from 'react';
import Income from './Income';
import Expense from './Expense';
import { Row, Col } from 'react-bootstrap';
import { DataContext } from './DataContext';
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from './GlobalState';

const ExpenseTracker = () => {
    const localAppData = useContext(DataContext);
    return (
        <>
            <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
        </>
    )
}

export default ExpenseTracker;
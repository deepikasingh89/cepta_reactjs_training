import React, { useContext } from 'react';
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
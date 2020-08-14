import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import './StyleCss.css';

export const  AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>transaction.transactionsAmount);
    
    var incomeBalance = amounts
        .filter(item => item > 0)
        .reduce((acc, item)=>(acc += item), 0)
        .toFixed(2); 

    var expenseBalance = (amounts
        .filter(item => item < 0 )
        .reduce((acc, item)=>(acc += item), 0)*-1)
        .toFixed(2);     
    
    return (
        <div>
            <div className="summary income">
                <h6>INCOME</h6>
                <p>${incomeBalance}</p>
            </div>
            
            <div className="summary expense">
                <h6>EXPENSE</h6>
                <p>${expenseBalance}</p>
            </div>

        </div>
    )
    
}
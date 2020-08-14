import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import './StyleCss.css';

export const  Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>transaction.transactionsAmount);
    var accountBalance = amounts.reduce((acc, item)=>(acc += item), 0).toFixed(2); 

    return (
        <div id="currentBalance">
            <h4>Current Balance</h4>
        <p>${accountBalance}</p>
        </div>
    )
    
}
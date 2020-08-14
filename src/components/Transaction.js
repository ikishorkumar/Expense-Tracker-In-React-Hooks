import React from 'react';

export const  Transaction = ({transaction}) => {
    return (
        <li className="incometransication">
        {transaction.description}
        <span className="amount">{transaction.transactionsAmount}</span>
        <button className="btnDel">Delete</button>
    </li>
    )
    
}
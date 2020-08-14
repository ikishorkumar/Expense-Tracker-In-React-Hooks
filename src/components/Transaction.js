import React from 'react';

export const  Transaction = ({transaction}) => {
    const sign = transaction.transactionsAmount < 0 ? '-' : '+'
    return (
        <li className={transaction.transactionsAmount < 0 ? 'expensetransication' : 'incometransication'}>
            {transaction.description}
        <span className="amount">{sign}${Math.abs(transaction.transactionsAmount)}</span>
        <button className="btnDel">Delete</button>
        </li>
    )
    
}
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const  Transaction = ({transaction}) => {
    const sign = transaction.transactionsAmount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <li className={transaction.transactionsAmount < 0 ? 'expensetransication' : 'incometransication'}>
            {transaction.description}
        <span className="amount">{sign}${Math.abs(transaction.transactionsAmount)}</span>
        <button className="btnDel" onClick = {()=>deleteTransaction(transaction.id)}>X</button>
        </li>
    )
    
}
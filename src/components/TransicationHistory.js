import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction'
 
export const  TransicationHistory = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div id="THistory">
            <h5>Transication History</h5>
            <ul>
                {transactions.map(transaction=>(
                <Transaction transaction = {transaction} />
                )
                )}      
                </ul>
        </div>
    )
    
}
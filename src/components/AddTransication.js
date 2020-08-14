import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
export const  AddTransication = () => {


    const [description,setDescription]= useState('');
    const [transactionsAmount,setTransactionAmount]= useState(0);
    const {addTransaction} = useContext(GlobalContext)

   const onSubmit= e => {
       e.preventDefault();
        if (description !== "" && transactionsAmount !==0 ) {
            const newTransaction = {
                id: Math.floor(Math.random()*100000000),
                description,
                transactionsAmount: +transactionsAmount
            }
        addTransaction(newTransaction);
            
        } 
        else {
            alert("??");
        }
        
    }
    return (
        <div className="transicationAdd">
            <h5>Add Transication</h5>
            <form onSubmit={onSubmit}>
            <label htmlFor="discription">Discription</label>
            <br/>
            <input id="discription"
                placeholder="Discribe Your Transaction"
                type="text"
                value={description}
                onChange= {(e)=> setDescription(e.target.value)} />
             <br/>

            <label htmlFor="amount"> Transaction Amount</label>
            <br/>
            <input id="amount"
                type="number"
                placeholder="$0.00"
                value={transactionsAmount} 
                onChange= {(e)=> setTransactionAmount(e.target.value)}/>
            <br></br>
            <button className="addbtn">Add</button>
            </form>
            
        </div>
    )
    
}
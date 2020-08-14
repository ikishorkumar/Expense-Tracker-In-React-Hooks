import React,{useState} from 'react';
export const  AddTransication = () => {

    const [discription,setDiscription]= useState();
    const [transactionAmount,setTransactionAmount]= useState();


    return (
        <div className="transicationAdd">
            <h5>Add Transication</h5>
            <form>
            <label htmlFor="discription">Discription</label>
            <br/>
            <input id="discription"
                placeholder="Discribe Your Transaction"
                type="text"
                value={discription}
                onChange= {(e)=> setDiscription(e.target.value)} />
             <br/>

            <label htmlFor="amount"> Transaction Amount</label>
            <br/>
            <input id="amount"
                type="number"
                placeholder="$0.00"
                value={transactionAmount} 
                onChange= {(e)=> setTransactionAmount(e.target.value)}/>
            <br></br>
            <button className="addbtn">Add</button>
            </form>
            
        </div>
    )
    
}
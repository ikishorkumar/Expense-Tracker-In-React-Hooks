import React from 'react';
export const  TransicationHistory = () => {
    return (
        <div id="THistory">
            <h5>Transication History</h5>
            <ul>
                <li className="incometransication">
                    Rack Purchased
                    <span className="amount">$100</span>
                    <button className="btnDel">Delete</button>
                </li>
                <li className="expensetransication">
                    Rack Purchased
                    <span className="amount">$100</span>
                    <button className="btnDel">Delete</button>
                </li>
            </ul>
        </div>
    )
    
}
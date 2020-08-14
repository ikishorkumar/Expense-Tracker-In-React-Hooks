import React from 'react';
import './StyleCss.css';

export const  AccountSummary = () => {
    return (
        <div>
            <div className="summary income">
                <h6>INCOME</h6>
                <p>$0.00</p>
            </div>
            
            <div className="summary expense">
                <h6>EXPENSE</h6>
                <p>$0.00</p>
            </div>

        </div>
    )
    
}
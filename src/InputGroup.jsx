import { useState } from "react"
export default function InputGroup(){
    useState();
    return(
        <>
        <div className="input-group">
        <p>
        <label htmlFor="initial_investment">Initial Investment</label>
        <input id ="initial_investment"type="number" name="initial Investment" required />
         </p>
        <p>
        <label htmlFor="annual_investment">Annual Investment</label>
        <input id="annual_invvestment" type="number" name="annual_investment" required/>
        </p>
        </div>


        <div className="input-group">
            <p><label htmlFor="return">Expected Return</label>
        <input id ="return" type="number" /></p>
        <p>
        <label htmlFor="duration">Duration</label>
        <input id ="duration" type="numper" />
        </p>
        </div></>
    
    )
}
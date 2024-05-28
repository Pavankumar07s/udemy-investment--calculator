
export default function InputGroup({OnChange,userInput}){
    return(
        <>
        <div className="input-group">
        <p>
        <label htmlFor="initial_investment">Initial Investment</label>
        <input id ="initial_investment"type="number" name="initial Investment"  value={userInput.initialInvestment} onChange={(event)=>OnChange('initialInvestment',event.target.value)}required />
         </p>
        <p>
        <label htmlFor="annual_investment">Annual Investment</label>
        <input id="annual_invvestment" type="number" name="annual_investment" value={userInput.annualInvestment} onChange={(event)=>OnChange('annualInvestment',event.target.value)}required/>
        </p>
        </div>


        <div className="input-group">
            <p><label htmlFor="return">Expected Return</label>
        <input id ="return" type="number" value={userInput.expectedReturn} onChange={(event)=>OnChange('expectedReturn',event.target.value)}/></p>
        <p>
        <label htmlFor="duration">Duration</label>
        <input id ="duration" type="number" value={userInput.duration} onChange={(event)=>OnChange('duration',event.target.value)}/>
        </p>
        </div></>
    
    )
}
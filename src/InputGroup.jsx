import { useState } from "react"
export default function InputGroup(){
    const [userInput,setUsersInput]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10

    });
    function handleChange(inputIdentifier,newvalue){
        setUsersInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newvalue
            }
        })
    }
    return(
        <>
        <div className="input-group">
        <p>
        <label htmlFor="initial_investment">Initial Investment</label>
        <input id ="initial_investment"type="number" name="initial Investment"  value={userInput.initialInvestment} onChange={(event)=>handleChange('initialInvestment',event.target.value)}required />
         </p>
        <p>
        <label htmlFor="annual_investment">Annual Investment</label>
        <input id="annual_invvestment" type="number" name="annual_investment" value={userInput.annualInvestment} onChange={(event)=>handleChange('annualInvestment',event.target.value)}required/>
        </p>
        </div>


        <div className="input-group">
            <p><label htmlFor="return">Expected Return</label>
        <input id ="return" type="number" value={userInput.expectedReturn} onChange={(event)=>handleChange('expectedReturn',event.target.value)}/></p>
        <p>
        <label htmlFor="duration">Duration</label>
        <input id ="duration" type="number" value={userInput.duration} onChange={(event)=>handleChange('duration',event.target.value)}/>
        </p>
        </div></>
    
    )
}
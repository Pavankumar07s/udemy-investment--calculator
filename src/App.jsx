import Header from "./Header"
import UserInput from "./UserInput"
import { useState } from "react";
import Result from "./Result";
function App() {
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
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange} />
    <Result input={userInput}/>
    </>
    
  )
}

export default App

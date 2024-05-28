import {calculateInvestmentResults} from "./util/investment"
export default function Result ({input}){
    const resultDate=calculateInvestmentResults(input)
    console.log(resultDate)
    return(
        <>
        <p>result....</p>
        </>
        
    )
}
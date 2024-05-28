import {calculateInvestmentResults,formatter} from "./util/investment"
export default function Result ({input}){
    const resultDate=calculateInvestmentResults(input)
    console.log(resultDate)
    return(
        <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(year)</th>
                    <th>Total interest</th>
                    <th>Inveted capital</th>
                </tr>
            </thead>
            <tbody>
                {resultDate.map(yearData=>{
                    const totalInterest=yearData.valueEndOfYear-(yearData.annualInvestment*yearData.year);
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(yearData.annualInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
        
    )
}
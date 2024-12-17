import React from 'react'
import {calculateInvestmentResults , formatter} from '../util/investment'
const Results = ({details}) => {

    const resultsData = calculateInvestmentResults(details);
    const initailInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment ;
  return (
    <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Intrest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData && resultsData.map((data)=> {
                    const totalInrest= data.valueEndOfYear - data.annualInvestment * data.year - initailInvestment;
                    const totalInvestment = data.valueEndOfYear -totalInrest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInrest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                        </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
      
    </>
  )
}

export default Results

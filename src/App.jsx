import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"
function App() {

  const [details , setDetails] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration :10 
  });

  const inputIsValid = details.duration > 0;

function handleChange (inputIndentifier , newValue){
    setDetails(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIndentifier] : +newValue
        }
    })
}

  return (
    <>
      <Header/>
      <UserInput handleChange={handleChange} details={details}/>
      {inputIsValid ? <Results details={details} /> : <p className="center">Please enter duration greater than 0</p>}
    </>
  )
}

export default App

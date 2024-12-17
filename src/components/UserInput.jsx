import React from 'react'

const UserInput = ({handleChange, details}) => {
    
  return (
    <section id="user-input">
        <div className='input-group'>
            <p>
                <label>Initail Investment</label>
                <input type="number" onChange = {(e) => handleChange('initialInvestment',e.target.value )} value ={details.initialInvestment} required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number"  onChange = {(e) => handleChange('annualInvestment',e.target.value )} value ={details.annualInvestment} required/>
            </p>
        </div>

        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input type="number"  onChange = {(e) => handleChange('expectedReturn',e.target.value )} value ={details.expectedReturn}  required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number"  onChange = {(e) => handleChange('duration',e.target.value )} value ={details.duration}  required />
            </p>
        </div>
      
    </section>
  )
}

export default UserInput

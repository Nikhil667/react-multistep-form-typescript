import { FormEvent, useState } from "react"
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {

  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  //const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([ <div>one</div>, <div>two</div> ]) 
  //jsx has been passed in the parameter
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([ 
    <UserForm {...data} updateFields={updateFields} />, 
    <AddressForm {...data} updateFields={updateFields} />, 
    <AccountForm {...data} updateFields={updateFields} /> 
  ]) 

  function handleSubmit(e: FormEvent){
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div 
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
        maxWidth: "max-content" 
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ position:"absolute", top: "0.5rem", right: "0.5rem" }} >{currentStepIndex + 1} / {steps.length}</div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end"
          }}
        >
          {!isFirstStep && <button type="button" onClick={back} >Back</button>}
          <button type="submit">
            {isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App

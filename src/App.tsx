import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

function App() {

  //const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([ <div>one</div>, <div>two</div> ]) 
  //jsx has been passed in the parameter
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([ <UserForm/>, <AddressForm/>, <AccountForm/> ]) 

  return (
    <div 
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial" 
      }}
    >
      <form >
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
          <button type="button" onClick={next}>
            {isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App

import * as React from "react";
import MainSidebar from "./MainSidebar";
import "./Model.css";
import { FormWindow, FormNumber } from "./FormWindow";

export const FormValidityContext = React.createContext();

function Model() {
    const [formIndex, setFormIndex] = React.useState(0);
    const [firstFormIsCurrent, setFirstFormIsCurrent] = React.useState(true);
    const [formValidity, setFormValidity] = React.useState(false);
    const [submitForm, setSubmitForm] = React.useState(false);
    React.useEffect(()=>{
        if (formValidity && firstFormIsCurrent) {
            document.querySelector('.forwardButton').click();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[formValidity]) 
    return (
        <main>
            <MainSidebar></MainSidebar>
            <section>
                <FormValidityContext.Provider value={{
                    formValidity,
                    setFormValidity,
                    submitForm,
                    setSubmitForm,
                    setFormIndex
                }}>
                    <FormWindow indexValue = {formIndex}></FormWindow>
                                 
                <div className="btnDiv">
                        { !firstFormIsCurrent? 
                        <button 
                        className="backButton"
                        type="button" 
                        name="backButton"
                        onClick={ 
                            (e) => {
                                e.stopPropagation();
                                if ((formIndex - 1) > 0) {                                    
                                    setFormIndex(formIndex - 1);
                                    updateNumbersStyle(formIndex - 1);
                                } else {
                                    console.log('yup')
                                    setFormIndex(formIndex - 1); 
                                    //setFormValidity(true); 
                                    setFirstFormIsCurrent(true);
                                    updateNumbersStyle(formIndex - 1);                                     
                                }
                            }
                        }>Go Back</button> : ''}
                    <button 
                        className="forwardButton"
                        type="button" 
                        name="forwardButton"
                        onClick={ 
                            (e) => {
                                e.stopPropagation();
                                switch (firstFormIsCurrent) {
                                    case true:
                                        if (!submitForm) {
                                            setSubmitForm(true);
                                        }
                                        if (formValidity) {
                                            setFormIndex(formIndex + 1); 
                                            setFirstFormIsCurrent(false);
                                            updateNumbersStyle(formIndex + 1);
                                            setSubmitForm(false);
                                        }
                                        setFormValidity(false);
                                    break;
                                    case false:
                                        if ((formIndex + 1) < FormNumber() && (formIndex + 1) !== (FormNumber()-1) && formValidity) {
                                            setFormIndex(formIndex + 1); 
                                            setFirstFormIsCurrent(false);
                                            updateNumbersStyle(formIndex + 1);
                                        } else if ((formIndex + 1) === (FormNumber()-1) && formValidity) {
                                            setFormIndex(formIndex + 1);
                                            document.querySelector('.btnDiv').style.display = 'none';
                                        }
                                        setFormValidity(false);
                                    break;
                                    default:
                                        return;
                                    }                                
                                }
                        }>{formIndex !== 3? "Next Step" : "Confirm"}</button>
                </div>
                </FormValidityContext.Provider>  
            </section>                     
        </main>
    )
}
function updateNumbersStyle(stepNumber) {
    const numbers = document.querySelectorAll('.stepNumber');
        for (let number of numbers) {
            number.classList.remove('stepNumberSelected');
        }
        numbers[stepNumber].classList.add('stepNumberSelected');
}


export default Model;
import * as React from "react";
import "./PersonalInfo.css";
import { FormValidityContext } from "./Model";
import { PersonalContext } from "./FormWindow";

function checkForm(nameValue, emailValue, phoneValue) {
    console.log('checkform')
    let errorMessage = "This field is required";
    let isValid = true;
    if (nameValue === "") {
        console.log('er1')
        const nameInput = document.querySelector('#name');
        const nameInputLabel = nameInput.previousElementSibling;
        nameInput.classList.add('errorStyle');
        nameInputLabel.querySelector('span').textContent = errorMessage;
        isValid = false;
    }
    if (emailValue === "") {
        console.log('er2')
        const emailInput = document.querySelector('#email');
        const emailInputLabel = emailInput.previousElementSibling;
        emailInput.classList.add('errorStyle');
        emailInputLabel.querySelector('span').textContent = errorMessage;
        isValid = false;        
    }
    if (phoneValue === "") {
        console.log('er3')
        const phoneInput = document.querySelector('#phone');
        const phoneInputLabel = phoneInput.previousElementSibling;
        phoneInput.classList.add('errorStyle');
        phoneInputLabel.querySelector('span').textContent = errorMessage;
        isValid = false;        
    }
    return isValid;
}

function removeErrorStyle(event) {
    event.currentTarget.classList.remove('errorStyle');
}
function removeErrorMessage(event) {
    event.currentTarget.previousElementSibling.querySelector('span').textContent = "";
}

function Personal() {
    const {setCurrentPersonal} = React.useContext(PersonalContext);
    const {currentPersonal} = React.useContext(PersonalContext);
    const {setFormValidity} = React.useContext(FormValidityContext);
    const {submitForm} = React.useContext(FormValidityContext);
    const {setSubmitForm} = React.useContext(FormValidityContext);
    const [valid, setValid] = React.useState(false);
    const [userName, setUserName] = React.useState(currentPersonal.name);
    const [userEmail, setUserEmail] = React.useState(currentPersonal.email)
    const [userPhone, setUserPhone] = React.useState(currentPersonal.phone)
    React.useEffect(()=>{
        console.log(userName)
        if (submitForm === false) {
            console.log(valid);                                
        } else {            
            setSubmitForm(false);           
            document.querySelector('#submitButton').click();   
            console.log(valid)          
        }        
        setFormValidity(valid); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[submitForm, valid]); 
    return (
            <div className="mainField">
                <h1>
                    Personal info
                </h1>
                <p>
                    Please, provide your name, email address and phone number
                </p>
                <form 
                id="personalForm"
                onSubmit={(e)=> {
                    e.preventDefault();
                    const nameValue = document.querySelector('#name').value;
                    const emailValue = document.querySelector('#email').value;
                    const phoneValue = document.querySelector('#phone').value;
                    setCurrentPersonal({
                        ...currentPersonal,
                        "name": nameValue,
                        "email": emailValue,
                        "phone": phoneValue
                    });                     
                    setValid(checkForm(nameValue, emailValue, phoneValue));
                }}>
                    <label htmlFor='name' className="personalLabel">Name
                        <span></span>
                    </label>
                    <input 
                    type='text' 
                    placeholder="e.g. Stephen King" 
                    id="name"
                    value={userName}
                    className={userName? "fieldIsSet": ""}
                    onFocus={(event)=> removeErrorStyle(event)}
                    onChange={(event)=> {
                        setUserName(event.currentTarget.value);
                        removeErrorMessage(event);
                        removeErrorStyle(event);
                    }}/>
                    <label htmlFor='email' className="personalLabel" >Email Address
                        <span></span>
                    </label>
                    <input 
                    type='text' 
                    placeholder="e.g. stephenking@lorem.com" 
                    id="email"
                    value={userEmail}
                    className={userName? "fieldIsSet": ""}
                    onFocus={(event)=> removeErrorStyle(event)}
                    onChange={(event)=> {
                        setUserEmail(event.currentTarget.value);
                        removeErrorMessage(event);
                        removeErrorStyle(event);
                    }}/>
                    <label htmlFor='phone' className="personalLabel">Phone Number
                        <span></span>
                    </label>
                    <input 
                    type='text' 
                    placeholder="e.g. +1 234 567 890" 
                    id="phone"
                    value={userPhone}
                    className={userName? "fieldIsSet": ""}
                    onFocus={(event)=> removeErrorStyle(event)}
                    onChange={(event)=> {
                        setUserPhone(event.currentTarget.value);
                        removeErrorMessage(event);
                        removeErrorStyle(event);
                    }}/> 
                    <button type="submit" id="submitButton"/>                 
                </form>
            </div>
    )
}

export default Personal;
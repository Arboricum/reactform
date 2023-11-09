import * as React from "react";
import "./Plan.css";
import { PlanContext } from "./FormWindow";
import { RecurrencyContext, AddonContext } from "./FormWindow";
import { FormValidityContext } from "./Model";

export const planPrices = {
    Monthly: {
        Arcade: "$9/mo",
        Advanced: "$12/mo",
        Pro: "$15/mo"
    },
    Yearly: {
        Arcade: "$90/yr",
        Advanced: "$120/yr",
        Pro: "$150/yr"
    }
}

function changeButtonStyle(event) {
    console.log('change style')
    const buttons = document.querySelectorAll('.planChoiceButtons>button');
    buttons.forEach(button => {
        button.classList.remove('planSelected');
    });
    event.currentTarget.classList.add('planSelected');
}

function Plan() {
    const {setCurrentPlan} = React.useContext(PlanContext);
    const {currentPlan} = React.useContext(PlanContext);
    const {setCurrentRecurrency} = React.useContext(RecurrencyContext);
    const {currentRecurrency} = React.useContext(RecurrencyContext);
    const {setFormValidity} = React.useContext(FormValidityContext);
    const {setCurrentAddon} = React.useContext(AddonContext);
    const {currentAddon} = React.useContext(AddonContext);
    const {selectedAddon} = React.useContext(AddonContext);
    const {setSelectedAddon} = React.useContext(AddonContext);
    React.useEffect(()=> {
        if (currentPlan !== "") {
            setFormValidity(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
            <div className="mainField">
                <h1>
                    Select your plan
                </h1>
                <p>
                    You have the option of monthly or yearly billing
                </p>
                <div className="planChoice">
                    <div className="planChoiceButtons">
                        <button 
                        className={currentPlan === "Arcade"? 
                        "planSelected" : ""}
                        type="button" 
                        onClick={(event)=> {
                            setCurrentPlan('Arcade');
                            setFormValidity(true);
                            changeButtonStyle(event);
                            setCurrentAddon({
                                ...currentAddon,
                                "Online service": "",
                                "Larger storage": "",
                                "Customizable profile": ""                                
                                });
                            setSelectedAddon({
                                ...selectedAddon,
                                "OnlineAddonBox": false,
                                "LargerAddonBox": false,
                                "CustomAddonBox": false                              
                                });
                            }}>
                            <img src="images/icon-arcade.svg" alt="arcade plan" />
                            <h2>Arcade
                                <input type="hidden" value="Arcade"/>
                            </h2>
                            <p>{planPrices[currentRecurrency].Arcade}<br/>
                            {currentRecurrency === "Yearly"? <small>2 months free</small>: ""}</p>
                        </button>
                        <button
                        className={currentPlan === "Advanced"? 
                        "planSelected" : ""} 
                        type="button" 
                        onClick={(event)=> {
                            setCurrentPlan('Advanced');
                            setFormValidity(true);
                            changeButtonStyle(event);
                            setCurrentAddon({
                                ...currentAddon,
                                "Online service": "",
                                "Larger storage": "",
                                "Customizable profile": ""                                
                                });
                            setSelectedAddon({
                                ...selectedAddon,
                                "OnlineAddonBox": false,
                                "LargerAddonBox": false,
                                "CustomAddonBox": false                              
                                });
                            }}>
                            <img src="images/icon-advanced.svg" alt="advanced plan" />
                            <h2>Advanced
                                <input type="hidden" value="Advanced"/>
                            </h2>
                            <p>{planPrices[currentRecurrency].Advanced}<br/>
                            {currentRecurrency === "Yearly"? <small>2 months free</small>: ""}</p>
                        </button>
                        <button
                        className={currentPlan === "Pro"? 
                        "planSelected" : ""} 
                        type="button" 
                        onClick={(event)=> {
                            setCurrentPlan('Pro');
                            setFormValidity(true);
                            changeButtonStyle(event);
                            setCurrentAddon({
                                ...currentAddon,
                                "Online service": "",
                                "Larger storage": "",
                                "Customizable profile": ""                                
                                });
                            setSelectedAddon({
                                ...selectedAddon,
                                "OnlineAddonBox": false,
                                "LargerAddonBox": false,
                                "CustomAddonBox": false                              
                                });
                            }}>
                            <img src="images/icon-pro.svg" alt="pro plan" />
                            <h2>Pro
                                <input type="hidden" value="Pro"/>
                            </h2>
                            <p>{planPrices[currentRecurrency].Pro}<br/>
                            {currentRecurrency === "Yearly"? <small>2 months free</small>: ""}</p>
                        </button>
                    </div>
                    <div className="planRecurrency">
                        <label 
                        htmlFor="monthly" 
                        className={
                            currentRecurrency === "Monthly"? 
                            "recurrencySelected" :
                             ""}>Monthly
                        </label>
                        <span className="recurrencyContainer">
                            <span className="recurrencySelector" onClick={()=> {
                                setCurrentRecurrency('Monthly');
                                setCurrentAddon({
                                    ...currentAddon,
                                    "Online service": "",
                                    "Larger service": "",
                                    "Customizable profile": ""                                
                                    });
                            }}>
                                <input type="hidden" value="Monthly"/>
                            </span>
                            <span className="recurrencySelector" onClick={()=> {
                                setCurrentRecurrency('Yearly');
                                setCurrentAddon({
                                    ...currentAddon,
                                    "Online service": "",
                                    "Larger service": "",
                                    "Customizable profile": ""                                
                                    });
                            }}>
                                <input type="hidden" value="Yearly"/>
                            </span>
                            <span id="monthly" 
                            className={currentRecurrency === "Monthly"? 
                            "recurrencyMonthly": "recurrencyYearly"}></span>                            
                        </span>                        
                        <label 
                        htmlFor="yearly"
                        className={
                            currentRecurrency === "Yearly"? 
                            "recurrencySelected" :
                             ""}>Yearly
                        </label>
                    </div>
                </div>
            </div>  
    )
}

export default Plan;
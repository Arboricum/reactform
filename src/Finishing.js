import * as React from "react";
import "./Finishing.css";
import { PlanContext, RecurrencyContext, AddonContext } from "./FormWindow";
import { FormValidityContext } from "./Model";
import { planPrices } from "./Plan";

const TotPriceContext = React.createContext();

function ShowAddons () {
    const {currentAddon} = React.useContext(AddonContext);
    const {setCurrentTotPrice} = React.useContext(TotPriceContext);
    const {currentPlan} = React.useContext(PlanContext);
    const {currentRecurrency} = React.useContext(RecurrencyContext);     
    const chosenAddons = Object.keys(currentAddon).filter((key) => {
        return currentAddon[key] !== "";
      });
    const chosenAddonsPrices = [];
    for (let addon of chosenAddons) {
        let price = currentAddon[addon].split('').filter((char)=> {
            if (Number.isInteger(Number(char))) {
                return char;                
            } else {
                return null;
            }
        }).join('');
        chosenAddonsPrices.push(Number(price));
    }; 
    const planPrice = planPrices[currentRecurrency][currentPlan].split('').filter((char)=> {
        if (Number.isInteger(Number(char))) {
            return char;                
        } else {
            return null;
        }
    }).join('');
    chosenAddonsPrices.push(Number(planPrice));
    React.useEffect(()=> {
        setCurrentTotPrice(calcTot(chosenAddonsPrices)); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
       
    const chosenAddonsList = chosenAddons.map((addon, index) => {
        return (
        <li key={index} className="choiceListElement">
            <span className="choice">{addon}</span>
            <span className="price">{currentAddon[addon]}</span>
        </li>
        );
    });
    return chosenAddonsList;
}

function calcTot(chosenAddonsPrices) {
    return chosenAddonsPrices.reduce((sum, addonPrice)=> {
        return sum + addonPrice;
    }, 0)
}

function Finishing() {
    const {currentPlan} = React.useContext(PlanContext);
    const {currentRecurrency} = React.useContext(RecurrencyContext); 
    const [currentTotPrice, setCurrentTotPrice] = React.useState('');  
    const {setFormValidity} = React.useContext(FormValidityContext);
    const {setFormIndex} = React.useContext(FormValidityContext)
    React.useEffect(()=>{
        setFormValidity(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  
    return (
            <div className="mainField">
                <h1>
                    Finishing up
                </h1>
                <p>
                    Double-check everything looks OK before confirming
                </p>
                <ul className="allChoices">
                    <li className="choiceListElement">
                        <span className="choice choicePlan">
                            <h3>{currentPlan}&nbsp;({currentRecurrency})</h3>
                            <br/>
                            <span 
                            aria-description="change plan"
                            className="choiceChange"
                            onClick={()=> {
                                setFormIndex(1);
                            }}>Change</span>
                        </span>
                        <span className="planPrice">
                        {planPrices[currentRecurrency][currentPlan]}
                        </span>                                
                    </li>
                    <TotPriceContext.Provider value={{
                        currentTotPrice,
                        setCurrentTotPrice
                    }}>
                        <ShowAddons/>   
                        <ShowTotPrice/>                                           
                    </TotPriceContext.Provider>                    
                </ul>                                  
            </div>  
    )
}

function ShowTotPrice() {
    const {currentRecurrency} = React.useContext(RecurrencyContext); 
    const {currentTotPrice} = React.useContext(TotPriceContext);
    return (
    <li className="choiceListElement">
        <span className="choice">
            Total per ({currentRecurrency === "Monthly"? "month" : "year"})
        </span>
        <span className="priceTot">
            <b>
            {currentRecurrency === "Monthly"? 
            `+$${currentTotPrice}/mo` : 
            `+$${currentTotPrice}/yr`}
            </b>
        </span>
    </li>  
    )
}

export default Finishing;
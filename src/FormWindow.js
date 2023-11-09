import * as React from "react";
import Personal from "./Personal";
import Plan from "./Plan";
import Addon from "./Addon";
import Finishing from "./Finishing";
import Confirmed from "./Confirmed";

const FormList = [Personal, Plan, Addon, Finishing, Confirmed];

export const PersonalContext = React.createContext();
export const PlanContext = React.createContext();
export const RecurrencyContext = React.createContext();
export const AddonContext = React.createContext();

export function FormWindow({ indexValue }) {
    const Index = indexValue; 
    const CurrentForm = FormList[Index];
    const [currentPersonal, setCurrentPersonal] = React.useState({
        "name": "",
        "email": "",
        "phone": ""
    })
    const [currentPlan, setCurrentPlan] = React.useState('');
    const [currentRecurrency, setCurrentRecurrency] = React.useState('Monthly');
    const [currentAddon, setCurrentAddon] = React.useState({
        "Online service": "",
        "Larger storage": "",
        "Customizable profile": ""
    });
    const [selectedAddon, setSelectedAddon] = React.useState({
            "OnlineAddonBox": false,
            "LargerAddonBox": false,
            "CustomAddonBox": false
    })
    
    return (
        <PersonalContext.Provider value={{
            currentPersonal,
            setCurrentPersonal
        }}>
            <PlanContext.Provider value={{
                currentPlan,
                setCurrentPlan
            }}>
                <RecurrencyContext.Provider value={{
                    currentRecurrency,
                    setCurrentRecurrency
                }}>
                    <AddonContext.Provider value = {{
                        currentAddon,
                        setCurrentAddon,
                        selectedAddon,
                        setSelectedAddon
                    }}>
                        <CurrentForm></CurrentForm>
                    </AddonContext.Provider>
                </RecurrencyContext.Provider>            
            </PlanContext.Provider>  
        </PersonalContext.Provider>      
    )
}

export function FormNumber() {
    return FormList.length;
}



  

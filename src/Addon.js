import * as React from "react";
import "./Addon.css";
import { AddonContext, RecurrencyContext } from "./FormWindow";
import { FormValidityContext } from "./Model";

const addonPrices = {
    Monthly: {
        Online: "$1/mo",
        Larger: "$2/mo",
        Customizable: "$2/mo"
    },
    Yearly: {
        Online: "$10/yr",
        Larger: "$20/yr",
        Customizable: "$20/yr"
    }
}

function Addon() {    
    const {setFormValidity} = React.useContext(FormValidityContext);
    React.useEffect(()=>{
        setFormValidity(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])     
    return (
            <div className="mainField">
                <h1>
                    Pick add-ons
                </h1>
                <p>
                    Add-ons help enhance your gaming experience
                </p>
                <form id="addonForm">
                    <OnlineAddon></OnlineAddon>
                    <LargerAddon></LargerAddon>
                    <CustomAddon></CustomAddon>
                </form>
                
            </div>  
    )
}

function OnlineAddon() {
    const {currentRecurrency} = React.useContext(RecurrencyContext);
    const {setCurrentAddon} = React.useContext(AddonContext);
    const {currentAddon} = React.useContext(AddonContext);
    const {selectedAddon} = React.useContext(AddonContext);
    const {setSelectedAddon} = React.useContext(AddonContext);
    const [checked, setCheck] = React.useState(selectedAddon.OnlineAddonBox);
    return (
    <div className={checked? "addonElement addonElementSelected" : "addonElement"}>
        <span className="addonFormInput">
        <input 
        type="checkbox"
        value="Online service" 
        name="onlineService" 
        id="onlineServiceAddon"
        defaultChecked={checked} 
        onChange={() => {            
            if (!checked) {
                console.log(checked)
                let addonValue = addonPrices[currentRecurrency].Online;
                setCurrentAddon({
                ...currentAddon,
                "Online service": addonValue                                
                });
                console.log(addonValue, 'addonValue')
            } else {
                console.log(checked)
                let addonValue = "";
                setCurrentAddon({
                ...currentAddon,
                "Online service": addonValue                                
                });
            }
            setCheck((checked) => !checked);
            setSelectedAddon({
                ...selectedAddon,
                "OnlineAddonBox": !selectedAddon.OnlineAddonBox                                
                });
                console.log(selectedAddon.OnlineAddonBox, 'selectedAddon.OnlineAddonBox')
        }}/>
        </span>
        <label htmlFor="onlineServiceAddon">
            <span>
                <h2>
                    Online service
                </h2>
                <p>
                    Access to multiplayer games
                </p>
            </span>
            <span>
                {addonPrices[currentRecurrency].Online}
            </span>
        </label>
    </div>
    )
}
function LargerAddon() {
    const {currentRecurrency} = React.useContext(RecurrencyContext);
    const {setCurrentAddon} = React.useContext(AddonContext);
    const {currentAddon} = React.useContext(AddonContext);
    const {selectedAddon} = React.useContext(AddonContext);
    const {setSelectedAddon} = React.useContext(AddonContext);
    const [checked, setCheck] = React.useState(selectedAddon.LargerAddonBox);
    return (
    <div className={checked? "addonElement addonElementSelected" : "addonElement"}>
        <span className="addonFormInput">
            <input 
            type="checkbox"
            value="Larger storage" 
            name="largerStorage" 
            id="largerStorageAddon"
            defaultChecked={checked} 
            onChange={() => {                
                if (!checked) {
                    let addonValue = addonPrices[currentRecurrency].Larger;
                    setCurrentAddon({
                    ...currentAddon,
                    "Larger storage": addonValue                                
                    })
                } else {
                    let addonValue = "";
                    setCurrentAddon({
                    ...currentAddon,
                    "Larger storage": addonValue                                
                    })
                }
                setCheck((checked) => !checked);
                setSelectedAddon({
                    ...selectedAddon,
                    "LargerAddonBox": !selectedAddon.LargerAddonBox                                
                    });
            }}/>
        </span>
        <label htmlFor="largerStorageAddon">
            <span>
                <h2>
                    Larger Storage
                </h2>
                <p>
                    Extra 1TB of cloud save
                </p>
            </span>
            <span>
                {addonPrices[currentRecurrency].Larger}
            </span>
        </label>
    </div>
    )
}
function CustomAddon() {
    const {currentRecurrency} = React.useContext(RecurrencyContext);
    const {setCurrentAddon} = React.useContext(AddonContext);
    const {currentAddon} = React.useContext(AddonContext);
    const {selectedAddon} = React.useContext(AddonContext);
    const {setSelectedAddon} = React.useContext(AddonContext);
    const [checked, setCheck] = React.useState(selectedAddon.CustomAddonBox);
    return (
    <div className={checked? "addonElement addonElementSelected" : "addonElement"}>
        <span className="addonFormInput">
            <input 
            type="checkbox"
            value="Customizable profile" 
            name="customProfile" 
            id="customProfileAddon"
            defaultChecked={checked} 
            onChange={() => {                
                if (!checked) {
                    let addonValue = addonPrices[currentRecurrency].Customizable;
                    setCurrentAddon({
                    ...currentAddon,
                    "Customizable profile": addonValue                                
                    })
                } else {
                    let addonValue = "";
                    setCurrentAddon({
                    ...currentAddon,
                    "Customizable profile": addonValue                                
                    })
                }
                setCheck((checked) => !checked);
                setSelectedAddon({
                    ...selectedAddon,
                    "CustomAddonBox": !selectedAddon.CustomAddonBox                                
                    });
            }}/>
        </span>
        <label htmlFor="customProfileAddon">
            <span>
                <h2>
                    Customizable profile
                </h2>
                <p>
                    Custom them on your profile
                </p>
            </span>
            <span>
                {addonPrices[currentRecurrency].Customizable}
            </span>
        </label>
    </div>
    )
}


export default Addon;
import * as React from "react";
import "./MainSidebar.css";

function MainSidebar() {    
    return (
        <nav>
            <ul className="sidebarUl">
                <li className="sidebarLi">
                    <span className="stepNumber stepNumberSelected">1</span>
                    <span className="stepThin">STEP 1</span>
                    <span className="stepThick">YOUR INFO</span>
                </li>
                <li className="sidebarLi">
                    <span className="stepNumber">2</span>
                    <span className="stepThin">STEP 2</span>
                    <span className="stepThick">SELECT PLAN</span>                    
                </li>
                <li className="sidebarLi">
                    <span className="stepNumber">3</span>
                    <span className="stepThin">STEP 3</span>
                    <span className="stepThick">ADD-ONS</span>                    
                </li>
                <li className="sidebarLi">
                    <span className="stepNumber">4</span>
                    <span className="stepThin">STEP 4</span>
                    <span className="stepThick">SUMMARY</span>                    
                </li>
            </ul>
        </nav>
    )
}

export default MainSidebar;
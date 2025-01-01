import React from "react";
import "./apply.css"
const Apply:React.FC=()=>{
    return(
        <div className="ApplyContainer">
            <div className="flex  flex-col items-start">
                <div className="text-xl text-yellow-600 font-serif">New</div>
                <div className="text-5xl text-dark-400 font-serif">Apply Lab 1210</div>
            </div>
            <div className="secondLayer flex flex-row">
            <div className="ApplyShowBox rounded-xl">
                This is Box
            </div>
            <div className="formItem rounded-xl">
                表单
            </div>
            </div>
            
        </div>
    )
}
export default Apply;
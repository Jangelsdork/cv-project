import React from "react";

const Overview = (props) => {
    const { cvInputs } = props; 
/*to do: edit id to input type*/
    return (
        <div className="output">
            {cvInputs.map((inputData) => {
                return <div id={inputData.id} key={inputData.id}>{inputData.inputValue}</div> 
            })}
        </div>
    )
}

export default Overview
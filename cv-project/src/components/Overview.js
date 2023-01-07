import React from "react";

const Overview = (props) => {
    const { cvInputs } = props; 

    return (
        <div>
            {cvInputs.map((inputData) => {
                return <div key={inputData.id}>{inputData.inputValue}</div>
            })}
        </div>
    )
}

export default Overview
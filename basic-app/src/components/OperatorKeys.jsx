import React from "react";

function PrimaryOperatorKeys(){
    const operators = {divide: '/', multiple: 'x', minus: '-', plus: '+', equals:'=' }

    return (
        <div className="primaryOpsArea">
            {operators.map(([key,operator]) => (
                <button className="primaryOperator" key={key}
                onClick={alert(`Button ${key} button pressed: Operator ${operator}`)}>
                    {operator}
                </button>
            ))
            }
        </div>
    );
}

function SecondaryOperatorKeys(){
    const operators = {}

    return (
        <div className="SecondaryOpsArea">
            {operators.map(([key,operator]) => (
                <button className="primaryOperator" key={key}>{operator}</button>
            ))
            }
        </div>
    );
}


function OperatorKeys(){
    return (
        <div>
            <PrimaryOperatorKeys/>
            <SecondaryOperatorKeys/>
        </div>
    )
};



export default OperatorKeys;
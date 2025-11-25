import React from "react";
import Button from "./Button";

function NumberKeys(){
    const buttonNumbers = Array.from( {length: 10}, (_, i) => i);

    return (
            <div className="numberKeys">
                {buttonNumbers.map((number) =>(
                    <button className='numberKey' key='number' onClick={() => alert(`Button ${number} clicked!`)}>
                        {number}
                    </button>
                ))

                }
                
            </div>
            )
}


export default NumberKeys;
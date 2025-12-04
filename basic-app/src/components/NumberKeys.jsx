import React from "react";

function NumberKeys(){
    const buttonNumbers = Array.from( {length: 10}, (_, i) => i);

    return (
            <div className="numberKeys">
                {buttonNumbers.map((number) =>(
                    <button className='numberKey' key='number' style={'margin: 5px'} onClick={() => alert(`Button ${number} clicked!`)}>
                        {number}
                    </button>
                ))

                }
                
            </div>
            )
}


export default NumberKeys;
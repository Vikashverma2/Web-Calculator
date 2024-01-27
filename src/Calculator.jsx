import { useState } from "react"
import React from 'react'

const Calculator = () => {

    const [result, setResult] = useState("");

    const clickHandler = (event) => {
        setResult(result.concat(event.target.value));
    }

    const clrDisplay = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }


    return (
        <div className="mainBox">
            <div className="calc">
                <div className="CAL2">
                   <div className="diplayBox"> 
                    <input type="text" placeholder='0' className='display' value={result} />
                    </div>
                   <div>
                   <input type="button" value="%" className='btn bt' onClick={clickHandler} />
                    <input type="button" value="/" className='btn bt' onClick={clickHandler} />
                    <input type="button" value="C" className='btn bt1' onClick={clrDisplay} />
                   </div>
                    <div>
                    <input type="button" value="7" className='btn' onClick={clickHandler} />
                    <input type="button" value="8" className='btn' onClick={clickHandler} />
                    <input type="button" value="9" className='btn' onClick={clickHandler} />
                    <input type="button" value="*" className='btn bt' onClick={clickHandler} />
                    </div>
                    <div>
                    <input type="button" value="4" className='btn' onClick={clickHandler} />
                    <input type="button" value="5" className='btn' onClick={clickHandler} />
                    <input type="button" value="6" className='btn' onClick={clickHandler} />
                    <input type="button" value="-" className='btn bt' onClick={clickHandler} />
                    </div>
                    <div>
                    <input type="button" value="1" className='btn' onClick={clickHandler} />
                    <input type="button" value="2" className='btn' onClick={clickHandler} />
                    <input type="button" value="3" className='btn' onClick={clickHandler} />
                    <input type="button" value="+" className='btn bt' onClick={clickHandler} />
                    </div>
                    <div>
                    <input type="button" value="0" className='btn' onClick={clickHandler} />
                    <input type="button" value="." className='btn' onClick={clickHandler} />
                    <input type="button" value="=" className='btn bt2' onClick={calculate} />
                    </div>
                    <p>Made by - Vikash Verma❤️</p>
                </div>
            </div>

        </div>
    )
}

export default Calculator
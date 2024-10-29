import { useState } from 'react';
import './InputWithText.css';

function useInputWithText () {
 const [inputValue, setInputValue] = useState('')  

    function onChangeHandler(e){
        setInputValue(e.target.value)
        

    }

    return (
        <div className='container'>
            <input type="text" placeholder='digite aqui...' onChange={onChangeHandler}/>
            <h1>{inputValue}</h1>
        </div>
    )
}

export default useInputWithText; 
import React, {useState} from 'react';
import SettingsDisplay from "./SettingsDisplay";
import CounterDisplay from "./CounterDisplay";


export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

const Counter = () => {

    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))
    const [value, setValue] = useState<number>(0)

    const setToLocalStorage = () =>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
        setError(null)
        setValue(startValue)
    }






    const [error, setError] = useState<'incorrect value' | 'enter values and press "SET"' | null>('enter values and press "SET"')


    return (
        <>
            <SettingsDisplay  error={error} maxValue={maxValue} callBack={setMaxValue} startValue={startValue} setStartValue={setStartValue} setError={setError} set={setToLocalStorage}/>
            <CounterDisplay maxValue={maxValue} value={value} setError={setError} error={error} setValue={setValue} startValue={startValue}/>
        </>
    );
};

export default Counter;
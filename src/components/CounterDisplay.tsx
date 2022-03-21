import React, {useState} from 'react';

import s from './CounterDisplay.module.css'
import {ErrorType} from "./Counter";
import ButtonComponent from "./ButtonComponent";

type PropsType ={
    maxValue: number
    setError: (error:  ErrorType)=>void
    error: ErrorType
    value: number
    setValue: (value: number) => void
    startValue: number
}

const CounterDisplay: React.FC<PropsType> = (props) => {



    const incValue = () =>{
        props.setValue(props.value+1)
    }

    const resetHandler = () =>{
        props.setValue(props.startValue)
    }

    return (
        <div className={s.mainblock}>
            <div className={s.settingsblock}>
                {props.error ? <div>{props.error}</div> : <div>{props.value}</div>}

            </div>

            <div className={s.buttonblock}>
                {/*<button onClick={incValue} disabled={props.maxValue <= props.value || props.error !== null}>inc</button>*/} {/*<button onClick={resetHandler}>reset</button>*/}
                <ButtonComponent title={'inc'} disabled={props.maxValue <= props.value || props.error !== null} callback={incValue}   /><ButtonComponent title={'reset'} disabled={false} callback={resetHandler}   />
            </div>
        </div>
    );
};

export default CounterDisplay;
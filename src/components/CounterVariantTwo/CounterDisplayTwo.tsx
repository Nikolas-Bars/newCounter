import React, {useState} from 'react';

import s from './CounterDisplayTwo.module.css'
import {ErrorType} from "./CounterTwo";

import {Paper} from "@mui/material";
import ButtonComponent from "../ButtonComponent";

type PropsType ={
    maxValue: number
    setError: (error:  ErrorType)=>void
    error: ErrorType
    value: number
    setValue: (value: number) => void
    startValue: number
    set:()=>void
}

const CounterDisplayTwo: React.FC<PropsType> = (props) => {



    const incValue = () =>{
        props.setValue(props.value+1)
        console.log(props)
    }

    const resetHandler = () =>{
        props.setValue(props.startValue)
    }

    return (
        <div className={s.mainblock} >

            <div className={s.settingsblock}>
                {props.error ? <div style={props.error === 'enter values and press "SET"' ? {fontSize: '19px', marginTop: '35px', color: 'white', fontWeight: 'bold'} : {fontSize: '19px', marginTop: '35px', color: 'pink', fontWeight: 'bold'}}>{props.error}</div> : <div style={props.maxValue === props.value ? {marginTop: '15px', color: 'red'} : {marginTop: '15px'}}>{props.value}</div>}
            </div>



            <div className={s.buttonblock}>
                {/*<button onClick={incValue} disabled={props.maxValue <= props.value || props.error !== null}>inc</button>*/} {/*<button onClick={resetHandler}>reset</button>*/}

                <ButtonComponent title={'inc'} disabled={props.maxValue <= props.value || props.error !== null} callback={incValue}   />
                <ButtonComponent title={'reset'} disabled={false} callback={resetHandler}   />
                <ButtonComponent title={'SET'} disabled={false} callback={props.set}/>
            </div>


        </div>
    );
};

export default CounterDisplayTwo;
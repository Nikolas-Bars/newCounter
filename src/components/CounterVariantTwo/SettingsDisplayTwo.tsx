import React, {ChangeEvent, useState} from 'react';

import s from './SettingDisplayTwo.module.css'
import {ErrorType} from "./CounterTwo";
import ButtonComponent from "../ButtonComponent";


type PropsType = {
    maxValue: number;
    callBack: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    set: () => void
    setError: (error: ErrorType) => void
    error: ErrorType

}

const SettingsDisplayTwo: React.FC<PropsType> = (props) => {

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(Number(e.target.value))
        console.log(props.maxValue)
        if (Number(e.target.value) <= props.startValue || props.startValue < 0) {
            props.setError('incorrect value')
        } else {
            props.setError('enter values and press "SET"')
        }
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.target.value))
        console.log(props.startValue)

        if (Number(e.target.value) >= props.maxValue || Number(e.target.value) < 0) {

            props.setError('incorrect value')
        } else {
            props.setError('enter values and press "SET"')
        }
    }


    return (
        <div className={s.mainblock}>
            <div className={s.settingsblock}>


                <div>


                    <div>
                        <div style={{float: 'left', textAlign: "left", margin: '10px'}}>max value:</div>
                        <input value={props.maxValue} onChange={changeValue} style={props.error === "incorrect value" ? {
                            float: 'right',
                            width: '100px',
                            textAlign: 'center',
                            margin: '10px',
                            color: 'wheat',
                            fontWeight: "bold",
                            backgroundColor: 'red'
                        } : {
                            float: 'right',
                            width: '100px',
                            textAlign: 'center',
                            margin: '10px',
                            color: 'black'
                        }
                        } type="number"/></div>


                    <div>
                        <div style={{float: 'left', textAlign: "left", margin: '10px'}}>start value:</div>
                        <input value={props.startValue} onChange={changeStartValue}
                               style={props.error === "incorrect value" ? {
                                   float: 'right',
                                   width: '100px',
                                   textAlign: 'center',
                                   margin: '10px',
                                   color: 'wheat',
                                   fontWeight: "bold",
                                   backgroundColor: 'red'
                               } : {
                                   float: 'right',
                                   width: '100px',
                                   textAlign: 'center',
                                   margin: '10px',
                                   color: 'black'
                               }
                               }
                               type="number"/></div>


                </div>
            </div>

            <div className={s.buttonblock}>
                <ButtonComponent title={'SET'} disabled={props.error === "incorrect value"} callback={props.set}/>
                {/*<button onClick={props.set} disabled={props.error === "incorrect value"}>SET</button>*/}
            </div>
        </div>
    );
};

export default SettingsDisplayTwo;
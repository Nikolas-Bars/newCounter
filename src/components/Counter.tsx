import React, {useEffect, useState} from 'react';
import SettingsDisplay from "./SettingsDisplay";
import CounterDisplay from "./CounterDisplay";
import {Container, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../bll/store";
import {incValueAC, setErrorAC, setMaxValueAC, setStartValueAC} from "../bll/counter-reducer";


export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

const Counter = () => {

    //  const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))

    useEffect(()=>{
        dispatch(setErrorAC('enter values and press "SET"'))
    },[])

    const maxValue = useSelector<StateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<StateType, number>(state => state.counter.startValue)
    const value = useSelector<StateType, number>(state => state.counter.value)
    const error = useSelector<StateType, ErrorType>(state => state.counter.error)


    const dispatch = useDispatch()

    const setMaxValue = (value: number) =>{
        dispatch(setMaxValueAC(value))
    }

    const setStartValue =(value: number)=>{
        dispatch(setStartValueAC(value))
    }

    const setValue =(value: number)=>{
        dispatch(incValueAC(value))
    }

    const setToLocalStorage = () => {
        setError(null)
        setValue(startValue)
    }

    const setError =(error: ErrorType)=> {
        dispatch(setErrorAC(error))
    }

    return (
        <div>

            <Container fixed style={{padding: '20px'}}>
                <Grid container style={{marginBottom: '15px'}}>
                    <Paper variant="outlined">
                        <SettingsDisplay error={error} maxValue={maxValue} callBack={setMaxValue}
                                         startValue={startValue} setStartValue={setStartValue} setError={setError}
                                         set={setToLocalStorage}/>
                    </Paper>
                </Grid>


                <Grid container style={{marginBottom: '15px'}}>
                    <Paper variant="outlined">
                        <CounterDisplay maxValue={maxValue} value={value} setError={setError} error={error}
                                        setValue={setValue} startValue={startValue}/>
                    </Paper>
                </Grid>
            </Container>


        </div>
    );
};

export default Counter;
import React, {useEffect} from 'react';
import {Container, Grid, Paper} from "@mui/material";
import SettingsDisplayTwo from "./SettingsDisplayTwo";
import CounterDisplayTwo from "./CounterDisplayTwo";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../bll/store";
import {
    setErrorCounterTwoAC,
    setMaxValueCounterTwoAC,
    setStartValueCounterTwoAC, setValueFromLocalStorageCounterTwoAC,
    toggleDisplayCounterTwoAC
} from "../../bll/counterVariantTwo-reducer";
import {setErrorAC, setValueFromLocalStorage} from "../../bll/counter-reducer";


export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

const CounterTwo = () => {

    // const [mdaxValue, setMaxgValue] = useState<number>(Number(localStorage.getItem('maxValue')))
    //const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))
    //const [value, setValue] = useState<number>(0)
    //const [toggleDisplay, setToggleDisplay] = useState<boolean>(true)





    //const [error, setError] = useState<'incorrect value' | 'enter values and press "SET"' | null>('enter values and press "SET"')




    const dispatch = useDispatch()
    const maxValue = useSelector<StateType, number>(state => state.counterVariantTwo.maxValueNumber)
    const startValue = useSelector<StateType, number>(state => state.counterVariantTwo.startValueNumber)
    const value = useSelector<StateType, number>(state => state.counterVariantTwo.valueOnDisplay)
    const toggleDisplay = useSelector<StateType, boolean>(state => state.counterVariantTwo.toggleDisplay)
    const error = useSelector<StateType, ErrorType>(state => state.counterVariantTwo.errorType)

    const setValue =(value: number)=>{
        dispatch(setValueFromLocalStorageCounterTwoAC(value))
    }


    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueCounterTwoAC(maxValue))
        console.log(maxValue)
    }
    const setStartValue = (startValue: number) => {
        dispatch(setStartValueCounterTwoAC(startValue))
    }
    const setToggleDisplay =()=>{
        dispatch(toggleDisplayCounterTwoAC())

    }

    const setError =(error: ErrorType)=>{
        dispatch(setErrorCounterTwoAC(error))
    }

    const setToLocalStorage = () => {
        setError(null)
        setValue(startValue)
        setToggleDisplay()
    }

    return (
        <div>

            <Container fixed style={{padding: '20px'}}>
                <Grid container style={{marginBottom: '15px'}}>
                    <Paper variant="outlined">


                        {toggleDisplay ?
                            <SettingsDisplayTwo error={error} maxValue={maxValue} callBack={setMaxValue}
                                                startValue={startValue} setStartValue={setStartValue}
                                                setError={setError}
                                                set={setToLocalStorage}/>

                            : <CounterDisplayTwo set={setToLocalStorage} maxValue={maxValue} value={value}
                                                 setError={setError} error={error}
                                                 setValue={setValue} startValue={startValue}/>}


                    </Paper>
                </Grid>


                <Grid container style={{marginBottom: '15px'}}>
                    <Paper variant="outlined">

                    </Paper>
                </Grid>
            </Container>


        </div>
    );
};

export default CounterTwo;
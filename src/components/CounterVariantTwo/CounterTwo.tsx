import React, {useState} from 'react';
import SettingsDisplay from "./SettingsDisplayTwo";
import CounterDisplay from "./CounterDisplayTwo";
import {Container, Grid, Paper} from "@mui/material";
import SettingsDisplayTwo from "./SettingsDisplayTwo";
import CounterDisplayTwo from "./CounterDisplayTwo";


export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

const CounterTwo = () => {

    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))
    const [value, setValue] = useState<number>(0)
    const [toggleDisplay, setToggleDisplay] = useState<boolean>(true)


    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
        setError(null)
        setValue(startValue)
        setToggleDisplay(!toggleDisplay)
    }


    const [error, setError] = useState<'incorrect value' | 'enter values and press "SET"' | null>('enter values and press "SET"')


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

                            : <CounterDisplayTwo set={setToLocalStorage} maxValue={maxValue} value={value} setError={setError} error={error}
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
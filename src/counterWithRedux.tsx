import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./bll/store";
import { incValueAC} from "./bll/counter-reducer";
import s from './counterWithRedux.module.css'

const CounterRedux = () => {


    return (
        <div className={s.block}>

        </div>
    );
};

export default CounterRedux;
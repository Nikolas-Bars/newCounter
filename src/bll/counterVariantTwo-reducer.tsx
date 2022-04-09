import {Dispatch} from "redux";

const COUNTER_TWO_SET_VALUE_FROM_LOCAL_STORAGE = "COUNTER_TWO_SET_VALUE_FROM_LOCAL_STORAGE"
const COUNTER_TWO_INC_VALUE = "COUNTER_TWO_INC_VALUE"
const COUNTER_TWO_SET_VALUE = "COUNTER_TWO_SET_VALUE"
const COUNTER_TWO_SET_START_VALUE = "COUNTER_TWO_SET_START_VALUE"
const COUNTER_TWO_SET_ERROR = "COUNTER_TWO_SET_ERROR"
const SET_TOGGLE = "SET_TOGGLE"





let initialState: InitialStateType = {
    valueOnDisplay: 0,
    maxValueNumber: 0,
    startValueNumber: 0,
    errorType: null,
    toggleDisplay: true
}

export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

type InitialStateType = {
    valueOnDisplay: number,
    maxValueNumber: number,
    startValueNumber: number,
    errorType: ErrorType,
    toggleDisplay: boolean
}



export const counterVariantTwoReducer =(state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case COUNTER_TWO_INC_VALUE:
            return {
                ...state,
                valueOnDisplay: action.value
        }
        case COUNTER_TWO_SET_VALUE_FROM_LOCAL_STORAGE:
            return {
                ...state,
                valueOnDisplay: action.value
        }
        case "COUNTER_TWO_SET_VALUE":
            return {
                ...state,
                maxValueNumber: action.maxValue
            }
        case "COUNTER_TWO_SET_START_VALUE":
            return {
                ...state,
                startValueNumber: action.value
            }
        case "COUNTER_TWO_SET_ERROR":
            return {
                ...state,
                errorType: action.error
            }
        case SET_TOGGLE:
            return{
                ...state,
                toggleDisplay: !state.toggleDisplay
            }


        default:
            return state
    }
}




export const incValueCounterTwoAC =(value: number)=> ({type: COUNTER_TWO_INC_VALUE, value: value} as const)

export const setMaxValueCounterTwoAC =(maxValue: number)=> ({type: COUNTER_TWO_SET_VALUE, maxValue} as const)

export const setValueFromLocalStorageCounterTwoAC =(value: number)=> ({type: COUNTER_TWO_SET_VALUE_FROM_LOCAL_STORAGE, value: value} as const)

export const setStartValueCounterTwoAC =(value: number)=> ({type: COUNTER_TWO_SET_START_VALUE, value: value} as const)

export const setErrorCounterTwoAC =(error: ErrorType)=> ({type: COUNTER_TWO_SET_ERROR, error: error} as const)

export const toggleDisplayCounterTwoAC =()=> ({type: SET_TOGGLE} as const)







type ActionType = IncValueACType | SetValueFromLocalStorageType | setMaxValueACType | setStartValueACType | setErrorACType | setToggleACType

type IncValueACType = ReturnType<typeof incValueCounterTwoAC>

type setMaxValueACType = ReturnType<typeof setMaxValueCounterTwoAC>

type SetValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorageCounterTwoAC>

type setStartValueACType = ReturnType<typeof setStartValueCounterTwoAC>

type setErrorACType = ReturnType<typeof setErrorCounterTwoAC>

type setToggleACType = ReturnType<typeof toggleDisplayCounterTwoAC>

////THUNK





///////////////////
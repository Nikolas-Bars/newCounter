import {Dispatch} from "redux";

const SET_VALUE_FROM_LOCAL_STORAGE = "SET_VALUE_FROM_LOCAL_STORAGE"
const INC_VALUE = "INC_VALUE"
const SET_VALUE = "SET_VALUE"
const SET_START_VALUE = "SET_START_VALUE"
const SET_ERROR = "SET_ERROR"

let initialState: InitialStateType = {
    value: 0,
    maxValue: 0,
    startValue: 0,
    error: 'enter values and press "SET"',
}

export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null

type InitialStateType = {
    value: number,
    maxValue: number,
    startValue: number,
    error: ErrorType
}



export const counterReducer =(state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case INC_VALUE:
            return {
                ...state,
                value: action.value
        }
        case SET_VALUE_FROM_LOCAL_STORAGE:
            return {
                ...state,
                value: action.value
        }
        case "SET_VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "SET_START_VALUE":
            return {
                ...state,
                startValue: action.value
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }


        default:
            return state
    }
}




export const incValueAC =(value: number)=> ({type: INC_VALUE, value: value} as const)

export const setMaxValueAC =(maxValue: number)=> ({type: SET_VALUE, maxValue} as const)

export const setValueFromLocalStorage =(value: number)=> ({type: SET_VALUE_FROM_LOCAL_STORAGE, value: value} as const)

export const setStartValueAC =(value: number)=> ({type: SET_START_VALUE, value: value} as const)

export const setErrorAC =(error: ErrorType)=> ({type: SET_ERROR, error: error} as const)







type ActionType = IncValueACType | SetValueFromLocalStorageType | setMaxValueACType | setStartValueACType | setErrorACType

type IncValueACType = ReturnType<typeof incValueAC>

type setMaxValueACType = ReturnType<typeof setMaxValueAC>

type SetValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorage>

type setStartValueACType = ReturnType<typeof setStartValueAC>

type setErrorACType = ReturnType<typeof setErrorAC>

////THUNK



///////////////////
import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {counterVariantTwoReducer} from "./counterVariantTwo-reducer";

const RootReducer = combineReducers(
    {
        counter: counterReducer,
        counterVariantTwo: counterVariantTwoReducer
    }
)

let preloadedState;

const persistedToDoString = localStorage.getItem("value")

if(persistedToDoString){
    preloadedState = JSON.parse(persistedToDoString)
}


export const store = createStore(RootReducer, preloadedState, applyMiddleware(thunk))




store.subscribe(()=>{
    localStorage.setItem("value", JSON.stringify(store.getState()))
}) // функция внутри будет срабатывать при изменении store


export type StoreType = typeof store
export type StateType = ReturnType<typeof RootReducer>


import { legacy_createStore,combineReducers } from "redux";
import { swimlaneReducer } from "./Reducer";

const storereducer=combineReducers({TODO:swimlaneReducer})

export const store=legacy_createStore(storereducer)
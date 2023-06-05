import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {createLogger} from 'redux-logger'
import watchAll from "../saga";
import CatReduce from "../reducer/categoryReduce";
import SkillTempeleteReduce from "../reducer/skillTempleteReduce";
import SkillTypeReduce from "../reducer/skilltypeReduce";

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
    catReducer : CatReduce,
    skillTempeleteReducer : SkillTempeleteReduce,
    skillTypeReducer : SkillTypeReduce

})

const Store =configureStore({
    reducer,
    middleware: (getDefaultMiddleware :any)=>
    getDefaultMiddleware({
        serializableCheck : false,
    }).concat(logger).concat(saga)
})

saga.run(watchAll)
export default Store
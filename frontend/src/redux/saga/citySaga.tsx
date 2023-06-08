import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetCity } from "../actions/actionReducer"

function* handleGetCity():any{
    try {
        const result = yield call(apiMethod.getCity)
        yield put(resGetCity(result))
    } catch (error) {
        yield put(resGetCity({message:error, status:400}))
    }
}

export {
    handleGetCity
}
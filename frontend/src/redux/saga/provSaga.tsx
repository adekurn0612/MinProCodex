import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetProv } from "../actions/actionReducer"

function* handleGetProv():any{
    try {
        const result = yield call(apiMethod.getProv)
        yield put(resGetProv(result))
    } catch (error) {
        yield put(resGetProv({message:error, status:400}))
    }
}

export {
    handleGetProv
}
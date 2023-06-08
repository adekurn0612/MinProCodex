import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetAddressType } from "../actions/actionReducer"

function* handleGetAddressType():any{
    try {
        const result = yield call(apiMethod.getAddressType)
        yield put(resGetAddressType(result))
    } catch (error) {
        yield put(resGetAddressType({message:error, status:400}))
    }
}

export {
    handleGetAddressType
}
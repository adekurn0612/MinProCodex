import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetCountry } from "../actions/actionReducer"

function* handleGetCountry ():any{
    // console.log('kntl',data)
    try {
        const result = yield call(apiMethod.getCountry)
        yield put(resGetCountry(result.data))
    } catch (error) {
        yield put(resGetCountry({message:error, status:400}))
    }
}

export {
    handleGetCountry
}
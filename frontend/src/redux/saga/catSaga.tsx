import { call, put } from "redux-saga/effects"
import { resCat } from "../actions/actionReducer"
import apiMethod from "@/api/apiMethod"

function* handleGetCat ():any{
    try {
        const result = yield call(apiMethod.getallCat )
        yield put(resCat(result.data))
    } catch (error) {
        yield put(resCat({message:error, status:400}))
    }
}

export {
    handleGetCat
}
import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetRouteActions } from "../actions/actionReducer"

function* handleGetRouteActions():any{
    try {
        const result = yield call(apiMethod.getRouteActions)
        yield put(resGetRouteActions(result.data))
    } catch (error) {
        yield put(resGetRouteActions({message:error, status:400}))
    }
}

export {
    handleGetRouteActions
}
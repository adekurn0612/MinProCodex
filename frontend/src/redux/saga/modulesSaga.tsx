import apiMethod from "@/pages/api/apiMethod"
import { call, put } from "redux-saga/effects"
import { resGetModule } from "../actions/actionReducer"

function* handleGetModule():any{
    try {
        const result = yield call(apiMethod.getModule)
        yield put(resGetModule(result))
    } catch (error) {
        yield put(resGetModule({message:error, status:400}))
    }
}

export {
    handleGetModule
}
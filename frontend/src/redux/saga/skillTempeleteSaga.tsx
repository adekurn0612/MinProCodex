import { call, put } from "redux-saga/effects"
import { resCat, resSkillTemplete } from "../actions/actionReducer"
import apiMethod from "@/api/apiMethod"

function* handleGeSkillTemplete ():any{
    try {
        const result = yield call(apiMethod.getallSkillTemplete )
        yield put(resSkillTemplete(result.data))
    } catch (error) {
        yield put(resSkillTemplete({message:error, status:400}))
    }
}

export {
    handleGeSkillTemplete
}
import { call, put } from "redux-saga/effects"
import { resCat, resSkillTemplete, resSkillType } from "../actions/actionReducer"
import apiMethod from "../../api/apiMethod"

function* handleGeSkillType ():any{
    try {
        const result = yield call(apiMethod.getallSkillType )
        yield put(resSkillType(result.data))
    } catch (error) {
        yield put(resSkillType({message:error, status:400}))
    }
}

export {
    handleGeSkillType
}
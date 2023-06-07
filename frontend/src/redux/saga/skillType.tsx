import { call, put } from "redux-saga/effects"
import { resCat, resSkillTemplete, resSkillType } from "../actions/actionReducer"
import apiMethod from "@/pages/api/apiMethod"

function* handleGeSkillType ():any{
    try {
        const result = yield call(apiMethod.getallSkillType )
        console.log(result)
        yield put(resSkillType(result))
    } catch (error) {
        yield put(resSkillType({message:error, status:400}))
    }
}

export {
    handleGeSkillType
}
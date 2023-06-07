import {takeEvery , all} from 'redux-saga/effects'
import ActionTypes from '../actions/actionType'
import { handleCreateCat, handleDelCat, handleGetCat, handleupdateCat } from './catSaga'
import { handleGeSkillType } from './skillType'
import { handleGeSkillTemplete } from './skillTempeleteSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_CAT , handleGetCat),
        takeEvery(ActionTypes.SKILL_TYPE , handleGeSkillType),
        takeEvery(ActionTypes.SKILL_TEMPLETE , handleGeSkillTemplete),
        takeEvery(ActionTypes.UPDATE_CAT , handleupdateCat),
        takeEvery(ActionTypes.DELETE_CAT , handleDelCat),
        takeEvery(ActionTypes.CREATE_CAT , handleCreateCat)
        
    ])
}

export default watchAll
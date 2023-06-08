import {takeEvery , all} from 'redux-saga/effects'
import ActionTypes from '../actions/actionType'
import { handleCreateCat, handleDelCat, handleGetCat, handleupdateCat } from './catSaga'
import { handleCreateSkillType, handleDelSkillType, handleGeSkillType, handleUpdateSkillType } from './skillType'
import { handleGeSkillTemplete } from './skillTempeleteSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_CAT , handleGetCat),
        takeEvery(ActionTypes.SKILL_TYPE , handleGeSkillType),
        takeEvery(ActionTypes.SKILL_TEMPLETE , handleGeSkillTemplete),
        takeEvery(ActionTypes.UPDATE_CAT , handleupdateCat),
        takeEvery(ActionTypes.DELETE_CAT , handleDelCat),
        takeEvery(ActionTypes.CREATE_CAT , handleCreateCat),
        takeEvery(ActionTypes.CREATE_SKILLTYPE , handleCreateSkillType),
        takeEvery(ActionTypes.DELETE_SKILLTYPE , handleDelSkillType),
        takeEvery(ActionTypes.UPDATE_SKILLTYPE , handleUpdateSkillType)
        
    ])
}

export default watchAll
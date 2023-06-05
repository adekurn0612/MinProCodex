import {takeEvery , all} from 'redux-saga/effects'
import ActionTypes from '../actions/actionType'
import { handleGetCat } from './catSaga'
import { handleGeSkillType } from './skillType'
import { handleGeSkillTemplete } from './skillTempeleteSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_CAT , handleGetCat),
        takeEvery(ActionTypes.SKILL_TYPE , handleGeSkillType),
        takeEvery(ActionTypes.SKILL_TEMPLETE , handleGeSkillTemplete),
        
    ])
}

export default watchAll
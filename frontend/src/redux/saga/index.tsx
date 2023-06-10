import {takeEvery , all} from 'redux-saga/effects'
import ActionTypes from '../actions/actionType'
import { handleCreateCat, handleDelCat, handleGetCat, handleupdateCat } from './catSaga'
import { handleCreateSkillType, handleDelSkillType, handleGeSkillType, handleUpdateSkillType } from './skillType'
import { handleGeSkillTemplete } from './skillTempeleteSaga'
import { handleCreateModule, handleDelModule, handleGetModule, handleUpdateModule } from './modulesSaga'
import { handleCreateAddressType, handleDelAddressType, handleGetAddressType, handleUpdateAddressType } from './addressTypeSaga'
import { handleGetRouteActions } from './routeActionsReduce'
import { handleCreateCountry, handleDelCountry, handleGetCountry, handleUpdateCountry } from './countrySaga'
import { handleGetProv } from './provSaga'
import { handleGetCity } from './citySaga'

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
        takeEvery(ActionTypes.UPDATE_SKILLTYPE , handleUpdateSkillType),

        takeEvery(ActionTypes.GET_MODULE, handleGetModule),
        takeEvery(ActionTypes.CREATE_MODULE, handleCreateModule),
        takeEvery(ActionTypes.DEL_MODULE, handleDelModule),
        takeEvery(ActionTypes.UPDATE_MODULE, handleUpdateModule),



        takeEvery(ActionTypes.GET_ADDRESSTYPE , handleGetAddressType),
        takeEvery(ActionTypes.CREATE_ADDTYPE , handleCreateAddressType),
        takeEvery(ActionTypes.DEL_ADDTYPE , handleDelAddressType),
        takeEvery(ActionTypes.UPDATE_ADDTYPE , handleUpdateAddressType),

        takeEvery(ActionTypes.GET_ROUTE_ACTIONS , handleGetRouteActions),

        takeEvery(ActionTypes.GET_COUNTRY , handleGetCountry),
        takeEvery(ActionTypes.DEL_COUNTRY , handleDelCountry),
        takeEvery(ActionTypes.CREATE_COUNTRY , handleCreateCountry),
        takeEvery(ActionTypes.UPDATE_COUNTRY , handleUpdateCountry),

        takeEvery(ActionTypes.GET_PROV , handleGetProv),
        takeEvery(ActionTypes.GET_CITY , handleGetCity),
        
    ])
}

export default watchAll
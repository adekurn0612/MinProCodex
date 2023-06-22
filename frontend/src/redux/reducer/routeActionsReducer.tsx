import ActionTypes from "../actions/actionType";

const initialState={
    routeActions : [],
    message : '',
    status : '',
    resfresh : '',
}

export default function routeActionsReduce(state = initialState , action : any){
const {type , payload} =action;
console.log('object', payload)
switch(type){
    case ActionTypes.GET_ROUTE_ACTIONS_RESPONSE:
        return{state, routeActions:payload ,  refresh:true};
        case ActionTypes.DEL_ROUTE_ACTIONS_RESPONSE:
            return{state, refresh:true};
        case ActionTypes.CREATE_ROUTE_ACTIONS_RESPONSE:
            return{state, refresh:true};
        case ActionTypes.UPDATE_ROUTE_ACTIONS_RESPONSE:
            return{state, refresh:true};
        default :
        return state
}
}
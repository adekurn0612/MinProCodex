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
        default :
        return state
}
}
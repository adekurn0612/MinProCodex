import ActionTypes from "../actions/actionType";

const initialState={
    country : [],
    message : '',
    status : '',
    resfresh : '',
}

export default function CountryReduce(state = initialState , action : any){
const {type , payload} =action;
console.log('object', payload)
switch(type){
    case ActionTypes.GET_COUNTRY_RESPONSE:
        return{state, country:payload ,  refresh:true};
    case ActionTypes.DEL_COUNTRY_RESPONSE:
        return{state,  refresh:false};
    case ActionTypes.CREATE_COUNTRY_RESPONSE:
        return{state,  refresh:false};
        case ActionTypes.UPDATE_COUNTRY_RESPONSE:
            return{state,  refresh:false};
        default :
        return state
}
}
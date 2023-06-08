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
        default :
        return state
}
}
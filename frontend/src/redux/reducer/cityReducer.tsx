import ActionType from "../actions/actionType";

const initialState ={
    city: [],
    message : '',
    status : '',
    refresh: '',
}


export default function CityReduce(state = initialState, action :any) {
        const {type , payload} = action;
        console.log(payload)
        switch (type) {
            case ActionType.GET_CITY_RESPONSE:
            return {state , city:payload ,status:payload.status, refresh:true};
            // case ActionType.DEL_CITY_RESPONSE:
            // return {state , refresh:false};
            // case ActionType.CREATE_CITY_RESPONSE:
            // return {state , refresh:false};
            // case ActionType.UPDATE_CITY_RESPONSE:
            // return {state , refresh:false};
            default:
                return state;
            }
}
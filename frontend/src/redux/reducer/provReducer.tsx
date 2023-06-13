import ActionType from "../actions/actionType";

const initialState ={
    prov: [],
    message : '',
    status : '',
    refresh: '',
}


export default function ProvReduce(state = initialState, action :any) {
        const {type , payload} = action;
        console.log(payload)
        switch (type) {
            case ActionType.GET_PROV_RESPONSE:
            return {state , prov:payload ,status:payload.status, refresh:true};
            // case ActionType.DEL_PROV_RESPONSE:
            // return {state ,  refresh:false};
            // case ActionType.CREATE_PROV_RESPONSE:
            // return {state ,  refresh:false};
            // case ActionType.UPDATE_PROV_RESPONSE:
            // return {state ,  refresh:false};
            default:
                return state;
            }
}
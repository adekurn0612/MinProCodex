import ActionType from "../actions/actionType";

const initialState ={
    category: [],
    message : '',
    status : '',
    refresh: '',
}


export default function CatReduce(state = initialState, action :any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.GET_CAT_RESPONSE:
            return {state , category:payload ,status:payload.status, refresh:true};
            default:
                return state;
            }
}
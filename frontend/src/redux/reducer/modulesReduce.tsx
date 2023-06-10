import ActionType from "../actions/actionType";

const initialState ={
    modules: [],
    message : '',
    status : '',
    refresh: '',
}


export default function ModulesReduce(state = initialState, action :any) {
        const {type , payload} = action;
        console.log(payload)
        switch (type) {
            case ActionType.GET_MODULE_RESPONSE:
            return {state , modules:payload , refresh:true};
            case ActionType.CREATE_MODULE_RESPONSE:
            return {state  , refresh:true};
            case ActionType.DEL_MODULE_RESPONSE:
            return {state  , refresh:true};
            case ActionType.UPDATE_MODULE_RESPONSE:
            return {state  , refresh:true};
            default:
                return state;
            }
}
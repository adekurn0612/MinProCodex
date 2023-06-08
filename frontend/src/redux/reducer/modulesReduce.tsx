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
            default:
                return state;
            }
}
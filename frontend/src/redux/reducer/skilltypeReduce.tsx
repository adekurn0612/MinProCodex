import ActionType from "../actions/actionType";

const initialState ={
    skillType: [],
    message : '',
    status : '',
    refresh: '',
}


export default function SkillTypeReduce(state = initialState, action :any) {
        const {type , payload} = action;
        console.log(payload)
        switch (type) {
            case ActionType.GET_CAT_RESPONSE:
            return {state , skillType:payload ,status:payload.status, refresh:true};
            default:
                return state;
            }
}
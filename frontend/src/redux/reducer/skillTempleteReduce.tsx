import ActionType from "../actions/actionType";

const initialState ={
    skillTemplete: [],
    message : '',
    status : '',
    refresh: '',
}


export default function SkillTempeleteReduce(state = initialState, action :any) {
        const {type , payload} = action;
        console.log(payload)
        switch (type) {
            case ActionType.SKILL_TEMPLETE_RESPONSE:
            return {state , skillTemplete:payload ,status:payload.status, refresh:true};
            case ActionType.DEL_SKILL_TEMPLETE_RESPONSE:
            return {state , refresh:true};
            case ActionType.CREATE_SKILL_TEMPLETE_RESPONSE:
            return {state , refresh:true};
            case ActionType.UPDATE_SKILL_TEMPLETE_RESPONSE:
            return {state , refresh:true};
            default:
                return state;
            }
}
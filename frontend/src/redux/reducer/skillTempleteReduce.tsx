import ActionType from "../actions/actionType";

const initialState ={
    skillTemplete: [],
    message : '',
    status : '',
    refresh: '',
}


export default function SkillTempeleteReduce(state = initialState, action :any) {
        const {type , payload} = action;
        // console.log(payload)
        switch (type) {
            case ActionType.GET_CAT_RESPONSE:
            return {state , skillTemplete:payload ,status:payload.status, refresh:true};
            default:
                return state;
            }
}
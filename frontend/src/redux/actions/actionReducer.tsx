import ActionTypes from "./actionType"

export const reqCat=()=>{
    return{
        type : ActionTypes.GET_CAT,
    }
}

export const resCat=(payload : any)=>{
    return{
        type : ActionTypes.GET_CAT_RESPONSE,
        payload
    }
}

export const reqSkillType=()=>{
    return{
        type : ActionTypes.SKILL_TYPE,
    }
}

export const resSkillType=(payload : any)=>{
    return{
        type : ActionTypes.SKILL_TYPE_RESPONSE,
        payload
    }
}

export const reqSkillTemplete=()=>{
    return{
        type : ActionTypes.SKILL_TEMPLETE,
    }
}

export const resSkillTemplete=(payload : any)=>{
    return{
        type : ActionTypes.SKILL_TEMPLETE_RESPONSE,
        payload
    }
}
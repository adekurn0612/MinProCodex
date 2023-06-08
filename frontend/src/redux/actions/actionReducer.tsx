import ActionTypes from "./actionType"

//CATEGORY

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

export const reqUpdateCat=(payload : any)=>{
    console.log("PAYLOAD",payload)
    return{
        type : ActionTypes.UPDATE_CAT,
        payload,
    }
}

export const resUpdateCat=(payload : any)=>{
    
    return{
        type : ActionTypes.UPDATE_CAT_RESPONSE,
        payload
    }
}

export const reqDelCat=(payload : any)=>{
    console.log(payload)
    return{

        type : ActionTypes.DELETE_CAT,
        payload
    }
}

export const resDelCat=(data : any)=>{
    return{
        type : ActionTypes.DELETE_CAT_RESPONSE,
        data
    }
}

export const reqCreateCat=(payload : any)=>{
    console.log('action',payload)
    return{
        type : ActionTypes.CREATE_CAT,
        payload
    }
}

export const resCreateCat=(payload : any)=>{
    return{
        type : ActionTypes.CREATE_CAT_RESPONSE,
        payload
    }
}


//skillType
export const reqSkillType=()=>{
    return{
        type : ActionTypes.SKILL_TYPE
    }
}

export const resSkillType=(payload : any)=>{
    console.log(payload)
    return{
        type : ActionTypes.SKILL_TYPE_RESPONSE,
        payload
    }
}

export const reqDelSkillType=(payload : any)=>{
    return{
        type : ActionTypes.DELETE_SKILLTYPE,
        payload
    }
}

export const resDelSkillType=(payload : any)=>{
    console.log(payload)
    return{
        type : ActionTypes.DELETE_SKILLTYPE_RESPONSE,
        payload
    }
}

export const reqCreateSkillType=(payload : any)=>{
    return{
        type : ActionTypes.CREATE_SKILLTYPE,
        payload
    }
}

export const resCreateSkillType=(payload : any)=>{
    console.log(payload)
    return{
        type : ActionTypes.CREATE_SKILLTYPE_RESPONSE,
        payload
    }
}

export const reqUpdateSkillType = (payload : any )=>{
    return{
        type : ActionTypes.UPDATE_SKILLTYPE,
        payload
    }
}

export const resUpdateSkillType = (payload : any )=>{
    return{
        type : ActionTypes.UPDATE_SKILLTYPE_RESPONSE,
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
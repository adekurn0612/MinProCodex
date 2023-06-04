import ActionTypes from "./actionReducer"


export const reqGetCat=()=>{
    return{
    type :ActionTypes.CAT,
    }
    }
    
export const resGetCat=(payload: any)=>{
    return{
    type : ActionTypes.CAT_RESPONSE,
    payload
    }
    }
import {USER_LOGIN,USER_LOGOUT} from "./actiontype"

export const loginAction=(payload)=>{
return(
    type:USER_LOGIN,
    payload
)
}

export const logoutAction=(payload)=>{
    return(
        type:USER_LOGOUT,
        payload
    )
}
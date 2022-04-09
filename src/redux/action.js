import {USER_LOGIN,USER_LOGOUT,USER_DATA} from "./actiontype"

export const loginAction=(payload)=>{
return(
    {
    type:USER_LOGIN,
    payload
    }
)
}

export const logoutAction=(payload)=>{
    return(
        {

            type:USER_LOGOUT,
            payload
        }
    )
}

export const userdata=(payload)=>{
    return({

        type:USER_DATA,
        payload
    }
    )
}
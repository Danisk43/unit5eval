import {USER_LOGIN,USER_LOGOUT} from "./actiontype"

const init={
    user:null,
    isAuth:false
}


export const reducer=(state=init,action)=>{
switch(action.type){
    case USER_LOGIN:
        return {
            ...state,user:action.payload
        }
        case USER_LOGOUT:
            return {
                ...state,user:action.payload
            }
        
}
}
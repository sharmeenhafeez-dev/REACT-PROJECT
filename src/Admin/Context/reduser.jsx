export const reducer = (state,action) => {

    switch (action.type) {
      case "USER_LOGOUT":{
        return{...state,token : action.token}
      }
      
      case "USER_LOGOUT":
            
         { return {...state,user:null}
        }
        default:
            return state
    }


}

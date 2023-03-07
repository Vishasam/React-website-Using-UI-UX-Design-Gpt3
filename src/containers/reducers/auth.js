import * as actionTypes from '../constant/actionTypes'

const authReducer =(state={authData:null},action)=>{
    switch(action.type){
        case actionTypes.AUTH:
            console.log('AUTH')
            return state
        default:
            return state
    }
}

export default authReducer;
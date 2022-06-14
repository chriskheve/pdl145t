import {
    setProvince
} from '../actions/provinceAction'

const initialState = {
    provinceDataState : ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROVINCE' : 
            return Object.assign({}, state, {
                provinceDataState: action.provinceData
            })
        default:
            return state;
    } 
}
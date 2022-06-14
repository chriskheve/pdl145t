import {
    toggleProvinceSidebar,
    setProvinceData
} from '../actions/sidebarAction'

const initialState = {
    isOpen  : false,
    provinceDataState : {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOGGLE_PROVINCE_SIDEBAR' : 
            return Object.assign({}, state, {
                isOpen: action.isOpen
            })
            
        case 'SET_PROVINCE' : 
            return Object.assign({}, state, {
                provinceDataState: action.provinceDataState
            })
        default:
            return state;
    } 
}
import {
    setProvince,
    setGeojson
} from '../actions/provinceAction'

const initialState = {
    provinceDataState : "",
    geojsonDataState: "accueil"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROVINCE' : 
            return Object.assign({}, state, {
                provinceDataState: action.provinceData
            })
        case 'SET_GEOJSON' : 
            return Object.assign({}, state, {
                geojsonDataState: action.geojsonData
            })
        default:
            return state;
    } 
}
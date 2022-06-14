import { combineReducers } from 'redux';
import settings from './settings';
import updateProvinceState from './provinceReducer'
import updateNotificationState from './notificationReducer'
import updateSidebarState  from './sidebarReducer'
export default combineReducers({
    settings,
    updateProvinceState,
    updateNotificationState,
    updateSidebarState
});
import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { searchQuery, searchLoading, searchResults, activeRow } from '../reducers/SearchInput';
import { pends } from '../reducers/Pends';
import { tests, acc } from '../reducers/Results';
import { test } from '../reducers/Panel';
import { comments } from '../reducers/Comments';




const RootReducer = combineReducers({
    comments,
    test,
    acc,
    tests,
    pends,
    activeRow,
    searchQuery,
    searchLoading,
    searchResults,
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    
});


export default RootReducer;
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { announcementListReducer } from './reducers/announcementReducer';
const initialState= {};
const reducer =combineReducers({
    announcementList: announcementListReducer,
  
  
})


const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//stworzenie store
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
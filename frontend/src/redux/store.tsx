import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { usersFetchReducer, userDetailsReducer, userUpdateReducer, userDeleteReducer, userLoginReducer, userRegisterReducer, profileUpdateReducer, passwordUpdateReducer } from './reducers/authReducer';
import {contactsFetchReducer, contactCreateReducer, contactUpdateReducer, contactDeleteReducer } from './reducers/contactReducer';

const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  profileUpdate: profileUpdateReducer,
  passwordUpdate: passwordUpdateReducer,
  usersFetch: usersFetchReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  contactFetch: contactsFetchReducer,
  contactCreate: contactCreateReducer,
  contactUpdate: contactUpdateReducer,
  contactDelete: contactDeleteReducer,
});

const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo")!);

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage
  }
};

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);


export type RootState = ReturnType<typeof rootReducers>;

export default store;
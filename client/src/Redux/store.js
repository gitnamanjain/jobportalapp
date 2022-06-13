import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { searchReducer } from "./Search/reducer";
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer";
import { CompanyReducer } from "./CompanyReviews/reducer";
import { registerReducer } from "./Register/reducer";
//do work here
import {persistStore,persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-key',
    storage
}

//end

const rootReducer = combineReducers({
                                        search:searchReducer,
                                        login:loginReducer,
                                        register:registerReducer,
                                        companies:CompanyReducer
                                    })
//start

const persistedReducer = persistReducer(persistConfig , rootReducer);

export const store = createStore(persistedReducer,applyMiddleware(thunk))

const persistor = persistStore(store);

export {persistor}


// const createComposer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer,createComposer(applyMiddleware(thunk)))

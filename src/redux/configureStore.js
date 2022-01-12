import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AuthedUser } from './reducers/authedUser';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            authedUser: AuthedUser,
        }), applyMiddleware(thunk, logger)
    );
    return store;
}

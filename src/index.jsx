import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import App from './components/App/App';

// Reducers:
const pitcherList = (state=[], action) => {
    if (action.type === 'ADD_PITCHER') {
        let newPitcherList = [...state, action.payload];
        return newPitcherList;
    }
    return state;
}

const catcherList = (state=[], action) => {
    if (action.type === 'ADD_CATCHER') {
        let newCatcherList = [...state, action.payload];
        return newCatcherList;
    }
    return state;
}

const currentPitcher = (state='', action) => {
    if (action.type === 'CURRENT_PITCHER') {
        console.log('action.payload is:', action.payload)
        let newCurrentPitcher = action.payload;
        return newCurrentPitcher;
    }
    return state;
}

const currentCatcher = (state='', action) => {
    if (action.type === 'CURRENT_CATCHER') {
        let newCurrentCatcher = action.payload;
        return newCurrentCatcher;
    }
    return state;
}

const store = createStore(
    combineReducers({
        pitcherList,
        catcherList,
        currentPitcher,
        currentCatcher
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

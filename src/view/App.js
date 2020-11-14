//libs
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
//imports saga
import * as sagas from "../saga";
//reducers
import combineReducers from "../reducers/combineReducers";
//redux-saga
import createSagaMiddleware from "redux-saga";
import ErrorBoundary from "./error/errorBoundray";
//init store for redux
const bindSaga=(sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
const sageMiddleware=createSagaMiddleware();
const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(sageMiddleware)))
bindSaga(sageMiddleware);
//
const App=()=> {
  return (
    <Provider store={store}>
        <ErrorBoundary>
            <div className="App">
                this is a samples
            </div>
        </ErrorBoundary>
    </Provider>

  );
}

export default App;

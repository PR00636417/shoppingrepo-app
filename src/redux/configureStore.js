import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
// eslint-disable-next-line
import * as sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  let store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
    )
  );

  for (let saga in sagas) {
    // eslint-disable-next-line
    sagaMiddleware.run(sagas[saga]);
  }

  return store;
}

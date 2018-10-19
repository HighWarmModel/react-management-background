import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'
export default function configureStore(initialState) {
  // 注意：必须满足 redux@>=3.1.0 才可r 以将 middleware 作为 createStore 的最后一个参数传递

  const sagaMiddleware = createSagaMiddleware()
      const store = createStore(
        reducer,
        initialState,
        compose(
          applyMiddleware(sagaMiddleware)
          // window.devToolsExtension()
        )
      )
  sagaMiddleware.run(rootSaga)
  return store
}
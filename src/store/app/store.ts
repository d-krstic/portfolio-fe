import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';

import authReducer from '../features/authSlice';
import blogReducer from '../features/blogSlice';
import globalReducer from '../features/globalSlice';
import { watchAuth, watchBlogs, watchContact } from '../sagas';

export const browserHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
    blog: blogReducer,
    router: routerReducer,
  },
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({ thunk: false }),
    sagaMiddleware,
    routerMiddleware,
  ],
});

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchContact);
sagaMiddleware.run(watchBlogs);

export const history = createReduxHistory(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

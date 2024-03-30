import {store} from '../store/index.js';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

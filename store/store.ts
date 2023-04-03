import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { slice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

/*const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });*/

const rootReducer = combineReducers({
    [slice.name]: slice.reducer,
  });
  
  const makeConfiguredStore = () =>
    configureStore({
      reducer: rootReducer,
      devTools: true,
    });
  
  export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
      console.log("SERVER")
      return makeConfiguredStore();
    } else {
      console.log("no SERVER")
      // we need it only on client side
      const persistConfig = {
        key: "nextjs",
        whitelist: ["auth"], // make sure it does not clash with server keys
        storage: AsyncStorage,
      };
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      let store: any = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }),
      });
      store.__persistor = persistStore(store); // Nasty hack
      return store;
    }
  };

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
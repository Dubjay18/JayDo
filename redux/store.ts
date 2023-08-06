import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserSlice from "./UserSlice";
import TasksSlice from "./TasksSlice";

const rootReducer = combineReducers({
  UserSlice,
  TasksSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [], //Things you want to persist
  //Things you don't want to persist
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

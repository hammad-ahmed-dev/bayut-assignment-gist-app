import { configureStore } from "@reduxjs/toolkit";
import gistReducer from "./reducers/gistReducer";

export const store = configureStore({
  reducer: {
    gistData: gistReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { persistStore, persistReducer } from "redux-persist"; // Import persistStore and persistReducer
import storage from "redux-persist/lib/storage"; // Import the storage option
import rootReducer from "./store/reducer/rootReducer";

// const store = configureStore({
//   reducer: rootReducer,
// });
// Create the persistConfig
const persistConfig = {
  key: "root",
  storage,
};

// Create the persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, // Use the persistedReducer
});

// Create the persisted store
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);

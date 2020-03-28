import React from "react";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import Routes from "./Routes";

import { store, persistor } from "./Store";

import Global from "./Assets/Styles/Global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;

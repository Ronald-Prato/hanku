import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { rootReducer } from "./commons/store";
import { Router } from "./router/Router";
import { Theme } from "./theme";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

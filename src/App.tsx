import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "./router/Router";
import { Theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

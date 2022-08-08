import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./components/Router";
import { darkTheme } from "./theme";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: `"YDestreet", sans-serif`,
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <Suspense fallback="...is loading">
            <Router />
          </Suspense>
        </MuiThemeProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

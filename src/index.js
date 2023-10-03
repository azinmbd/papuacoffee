import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import  store  from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import "./styles/app.scss";

let persistor = persistStore(store);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#539165",
    },
    custom: {
      milk: "#F8F5E4",
      orange: "#F7C04A",
      gray: "#525252"
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "orange",
        },
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

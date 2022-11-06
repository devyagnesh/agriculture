import React, { Suspense } from "react";
import AuthContext, { AuthContextProvider } from "./Context/AuthContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import "./index.css";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </AuthContextProvider>
  </BrowserRouter>
);

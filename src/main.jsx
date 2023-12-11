import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./index.css";
import routes from "./Routers/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ScrollTop from "./Pages/ScrollTop/ScrollTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <main>
        <RouterProvider router={routes} />
        <div className="fixed bottom-8 right-10 z-50">
          <ScrollTop />
        </div>
      </main>
    </AuthProvider>
  </React.StrictMode>
);

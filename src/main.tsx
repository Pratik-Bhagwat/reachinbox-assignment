import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "./context/auth-context.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import SelectedThreadProvider from "./context/selected-thread-context.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SelectedThreadProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster richColors />
          <App />
        </ThemeProvider>
      </SelectedThreadProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

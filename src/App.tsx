import { lazy, useEffect, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/protect-route";
import { useAuthContext } from "./hooks/use-auth-context";

const Login = lazy(() => import("./pages/login"));
const Onebox = lazy(() => import("./pages/onebox"));

function App() {
  const { isAuthenticated, setIsAuthenticated, setToken } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [setIsAuthenticated, setToken]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoute
                isAuthenticated={isAuthenticated}
                redirectTo="/login"
              >
                <Onebox />
              </ProtectRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectRoute isAuthenticated={!isAuthenticated} redirectTo="/">
                <Login />
              </ProtectRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

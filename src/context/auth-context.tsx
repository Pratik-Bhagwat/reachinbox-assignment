import { createContext, useState } from "react";

interface authContextI {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const INITIAL_STATE = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  token: "",
  setToken: () => {},
};

export const AuthContext = createContext<authContextI>(INITIAL_STATE);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

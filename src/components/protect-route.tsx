import { Navigate } from "react-router-dom";

interface ProtectRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

const ProtectRoute = ({
  children,
  isAuthenticated,
  redirectTo = "/",
}: ProtectRouteProps) => {
  if (!isAuthenticated) return <Navigate to={redirectTo} />;
  return children;
};

export default ProtectRoute;

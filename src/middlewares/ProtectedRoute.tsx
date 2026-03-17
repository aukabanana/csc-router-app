import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to="/" state={{ from: location }} replace />
    );
  }

  return children;
}

export default ProtectedRoute;
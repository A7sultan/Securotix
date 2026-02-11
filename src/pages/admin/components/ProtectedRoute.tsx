import { Navigate, useLocation } from "react-router-dom";
import {
  getToken,
  requiresSetup,
} from "@/pages/admin/services/authService";

export default function ProtectedRoute({ children }: any) {
  const location = useLocation();

  const token = getToken();
  const needsSetup = requiresSetup();

  // Not logged in → go to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in but must complete first setup
  if (needsSetup && location.pathname !== "/admin/setup") {
    return <Navigate to="/admin/setup" replace />;
  }

  return children;
}

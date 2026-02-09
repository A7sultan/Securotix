import { Navigate } from "react-router-dom";
import { getToken } from "@/pages/admin/services/authService";

export default function ProtectedRoute({ children }: any) {
  const token = getToken();

  if (!token) return <Navigate to="/admin/login" />;

  return children;
}

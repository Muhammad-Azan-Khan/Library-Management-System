import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [authUser] = useAuth();

  useEffect(() => {
    if (!authUser) {
      document.getElementById("signup-backdrop").classList.remove("hidden");
      document.getElementById("my_modal_6").showModal();
    }
  }, [authUser]);

  if (!authUser) return <Navigate to="/" />;
  return children;
}

export default ProtectedRoute;

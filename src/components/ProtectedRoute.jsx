import { useUserAuth } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = useUserAuth();
  if (!user) {
    return Navigate("/");
  }
  return children;
};

export default ProtectedRoute;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/AuthContext/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

 
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-green-600 text-lg font-semibold">
          Checking authentication...
        </span>
      </div>
    );
  }


  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

 
  return children;
}

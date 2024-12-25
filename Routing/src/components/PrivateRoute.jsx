import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = true; // Replace with real authentication logic

  if (!isAuth) {
    return <Navigate to="/log-in" />;
  }

  return children;
}

export default PrivateRoute;

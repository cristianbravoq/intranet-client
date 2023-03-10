import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isLogged } : { isLogged: boolean}) => {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
 
import { useLocation, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticate } from "../atom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useRecoilValue(authenticate);
  const location = useLocation();

  return auth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
  // if (!auth) {
  //   return <Navigate to="/login" state={{ from: location.pathname }} />;
  // }
};

export default PrivateRoute;

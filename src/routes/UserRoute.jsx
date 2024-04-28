import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserTokenContext } from "../context/UserTokenContext";

const UserRoute = ({ verified }) => {
const{decodedToken}=useContext(UserTokenContext)
 return verified.includes(decodedToken?.verified) ? <Outlet /> :<Navigate to="/login"/>};

export default UserRoute;
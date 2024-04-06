import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {Navigate , useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loader) {
        return <p>loadinggggggggg....................</p>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Context";


const useAuth = () => {
    const auth = useContext(AuthContext)
    
    return auth;
};

export default useAuth;
import { useActionState, useContext } from "react";
import AuthContext from "./authContext";

const useAuth = () => {
    const data = useContext(AuthContext);
}

import { createContext } from "react";


const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const AuthInfo={}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
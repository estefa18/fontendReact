import React, {createContext, useContext, useState} from 'react'; //Estos son módulos propios de react
//createContext -> es una cajita de espacio donde se guarda infromación donde se comporta donde quiera (Se guarda info si está autenticado o no)
// useContext -> Es un hoo, nos permite usar esa caja createContext
//useState -> Es el estado 

const AuthContext= createContext();


export function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () =>{
        setIsLoggedIn(true);
    }

    const logout = () =>{
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        window.location.href = '/';
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
    
};

export function useAuth(){
    return useContext(AuthContext)
};
import React, {useState} from 'react';

const Contexto = React.createContext();

export const useContexto = () => {
    return React.useContext(Contexto);
}

export const ContextoProvider = ({children}) =>{
    const [admin, setAdmin] = useState(false);
    return(
        <Contexto.Provider value={{admin, setAdmin}}>
            {children}
        </Contexto.Provider>
    );
}
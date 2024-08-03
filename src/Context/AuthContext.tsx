'use client'

import { createContext, useContext, useState, useEffect } from 'react';

interface userSessionProps {
    id?: any;
    token: string 
    DataUser: {
        
        email: string
        id: string
        name: string
        role: string
        orders: []
        phone: string
        address: string
    } 
    cartProducts: any[];
}

interface AuthContextProps {
    DataUser: userSessionProps | null
    setUserData: (data: userSessionProps | null ) => void
    token: string | null
    setToken: (token: string | null) => void
    cartProducts: any[]
    setCartProducts: (cartProducts: any[]) => void
}

const AuthContext = createContext<AuthContextProps>({
    token: null,
    setToken: () => {},
    DataUser: {
        token: "",
        DataUser: {
            email: '',
            id: '',
            name: '',
            role: '',
            orders: [],
            phone: '',
            address: ''
        },
        cartProducts: [] 
    },
    setUserData: () => {},
    cartProducts: [], 
    setCartProducts: () => {}
})

interface AuthProviderProps {
    children: React.ReactElement
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [DataUser, setUserData] = useState<userSessionProps | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('userToken'));
    const [cartProducts, setCartProducts] = useState<any[]>([]);

    useEffect(() => {
        if (DataUser) {
            localStorage.setItem('usersession', JSON.stringify(DataUser));
        } 
    }, [DataUser]);
    

    useEffect(() => {
        if (typeof window !== 'undefined'&& window.localStorage) {
            const data = localStorage.getItem('usersession');
            setUserData(JSON.parse(data!));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ DataUser, setUserData, token, setToken, cartProducts, setCartProducts }}>
            {children}
        </AuthContext.Provider>
    )
}




export const useAuth = () => useContext(AuthContext)


import { User } from '@auth0/auth0-react';
import { createContext, useContext, useState } from 'react';


interface LambdasUser extends User {
    
}

type UserContextType = {
    userData: LambdasUser | null;
    setUserData: (user: User) => void;
};

const UserContext = createContext<UserContextType>({
    userData: null,
    setUserData: () => {}
});

export const UserProvider = (props: { value: User | null; children: JSX.Element | JSX.Element[] }) => {
    const [userData, setUser] = useState<User | null>(props.value);

    const setUserData = (user: User) => {
        setUser(user);
    };

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext(UserContext) as UserContextType;

export default useUser;

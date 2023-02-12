import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import useUser from '../../../contexts/UserContext';
import Spinner from '../../misc/spinner/Spinner';

interface AuthenticationWrapperProps {
    App: React.FunctionComponent;
}

const AuthenticationWrapper: React.FunctionComponent<AuthenticationWrapperProps> = ({
    App
}: AuthenticationWrapperProps) => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } =
        useAuth0();
    const { userData, setUserData } = useUser();

    getAccessTokenSilently().then(
        (resolve) => {
            if (user) {
                setUserData(user);
                console.log(user);
            }
        },
        (reject) => {
            loginWithRedirect();
        }
    );

    return (
        <>
            {isLoading && <Spinner />}
            {isAuthenticated && !isLoading && <App />}
        </>
    );
};

export default AuthenticationWrapper;

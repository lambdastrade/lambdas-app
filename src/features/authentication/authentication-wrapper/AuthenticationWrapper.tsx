import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useUser from '../../../contexts/UserContext';
import { api } from '../../../utils/axiosInstances';
import Spinner from '../../misc/spinner/Spinner';

interface AuthenticationWrapperProps {
    App: React.FunctionComponent;
}

const AuthenticationWrapper: React.FunctionComponent<AuthenticationWrapperProps> = ({
    App
}: AuthenticationWrapperProps) => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } =
        useAuth0();
    const { setUserData } = useUser();

    getAccessTokenSilently().then(
        (token) => {
            api.interceptors.request.use((req) => {
                req.headers['Authorization'] = 'Bearer ' + token;
                return req;
            });
            if (user) {
                setUserData(user);
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

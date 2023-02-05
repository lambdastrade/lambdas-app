import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { AuthenticationWrapperProps } from "../../ts/interfaces/AuthenticationWrapperProps";
import NoAuth from "../not-authenticated/NoAuth";
import Spinner from "../spinner/Spinner";


const AuthenticationWrapper: React.FunctionComponent<AuthenticationWrapperProps> = ({ App }: AuthenticationWrapperProps) => {
    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    getAccessTokenSilently().then(resolve => {}, reject => {
        console.log('Authentication was rejected!');
        console.log(reject);
    });

    return(
        <>
        {isLoading &&
            <Spinner />
        }
        {isAuthenticated && !isLoading &&
            <App />
        }
        {!isAuthenticated && !isLoading  &&
            <NoAuth />
        }
        </>
    );
}




export default AuthenticationWrapper;
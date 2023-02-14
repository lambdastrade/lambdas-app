import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './contexts/RouteContext';
import DocumentTitle from './features/misc/document-title/DocumentTitle';
import { UserProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT}
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
        }}>
        <UserProvider value={null}>
            <React.StrictMode>
                <DocumentTitle />
                <RouterProvider router={router} />
            </React.StrictMode>
        </UserProvider>
    </Auth0Provider>
);

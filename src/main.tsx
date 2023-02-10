import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './contexts/RouteContext';
import DocumentTitle from './features/misc/document-title/DocumentTitle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <React.StrictMode>
            <DocumentTitle />
            <RouterProvider router={router} />
        </React.StrictMode>
    </Auth0Provider>
);

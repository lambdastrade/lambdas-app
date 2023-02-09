import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import DocumentTitle from './components/document-title/DocumentTitle';
import { RouterProvider } from 'react-router-dom';
import { router } from './contexts/RouteContext';

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

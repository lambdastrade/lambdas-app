import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import AuthenticationWrapper from './components/authentication-wrapper/AuthenticationWrapper';
import DocumentTitle from './components/document-title/DocumentTitle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/pages/not-found/ErrorPage';
import Composer from './components/pages/composer/Composer';
import Settings from './components/pages/settings/Settings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthenticationWrapper App={App} />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: <div>Dashboard</div>
            },
            {
                path: 'composer',
                element: <Composer />
            }
        ]
    },
    {
        path: '/settings',
        element: <AuthenticationWrapper App={Settings} />,
        errorElement: <ErrorPage />
    }
]);

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

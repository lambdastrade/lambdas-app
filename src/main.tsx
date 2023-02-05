import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import AuthenticationWrapper from './components/authentication-wrapper/AuthenticationWrapper';
import DocumentTitle from './components/document-title/DocumentTitle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/not-found/ErrorPage';

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
                element: <div>Calendar</div>
            }
        ]
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

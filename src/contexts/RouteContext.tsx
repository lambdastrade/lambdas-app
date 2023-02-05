import { ArrowUturnUpIcon, HomeModernIcon, PencilIcon } from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthenticationWrapper from '../components/authentication-wrapper/AuthenticationWrapper';
import Composer from '../components/pages/composer/Composer';
import ErrorPage from '../components/pages/not-found/ErrorPage';

const routes = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeModernIcon, current: true },
    { name: 'Composer', href: '/composer', icon: PencilIcon, current: false },
    { name: 'Deployment', href: '/deployment', icon: ArrowUturnUpIcon, current: false }
];

export const router = createBrowserRouter([
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
            },
            {
                path: 'deployment',
                element: <div>Deployment</div>
            }
        ]
    }
]);

interface RouteContextType {
    routes: Array<{
        name: string;
        href: string;
        icon: ForwardRefExoticComponent<
            SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined }
        >;
        current: boolean;
    }>;
}

const RouteContext: React.Context<RouteContextType> = React.createContext({
    routes: routes
});

export default RouteContext;

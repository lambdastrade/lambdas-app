import { ArrowLeftOnRectangleIcon, ArrowUturnUpIcon, BanknotesIcon, Cog6ToothIcon, HomeModernIcon, PencilIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthenticationWrapper from '../components/authentication-wrapper/AuthenticationWrapper';
import Composer from '../components/pages/composer/Composer';
import ErrorPage from '../components/pages/not-found/ErrorPage';

const mainRoutes = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeModernIcon, current: true },
    { name: 'Composer', href: '/composer', icon: PencilIcon, current: false },
    { name: 'Deployment', href: '/deployment', icon: ArrowUturnUpIcon, current: false }
];

const userRoutes = [
    { name: 'Account', href: '/account', icon: UserIcon },
    { name: 'Billing', href: '/billing', icon: BanknotesIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
    { name: 'Sign out', href: '/logout', icon: ArrowLeftOnRectangleIcon }
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
            },
            {
                path: 'account',
                element: <div>account</div>
            },
            {
                path: 'billing',
                element: <div>billing</div>
            },
            {
                path: 'settings',
                element: <div>settings</div>
            },
            {
                path: 'logout',
                element: <div>logout</div>
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

    userRoutes: Array<{
        name: string;
        href: string;
        icon: ForwardRefExoticComponent<
            SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined }
        >;
    }>;
}

const RouteContext: React.Context<RouteContextType> = React.createContext({
    routes: mainRoutes,
    userRoutes: userRoutes,
});

export default RouteContext;

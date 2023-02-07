import { ArrowLeftOnRectangleIcon, ArrowUturnUpIcon, Cog6ToothIcon, CreditCardIcon, FolderOpenIcon, HomeModernIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthenticationWrapper from '../components/authentication-wrapper/AuthenticationWrapper';
import Dashboard from '../components/pages/dashboard/Dashboard';
import ErrorPage from '../components/pages/not-found/ErrorPage';
import Projects from '../components/pages/projects/Projects';

const mainRoutes = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeModernIcon, current: true },
    { name: 'Projects', href: '/projects', icon: FolderOpenIcon, current: false },
    { name: 'Deployment', href: '/deployment', icon: ArrowUturnUpIcon, current: false }
];

const userRoutes = [
    { name: 'Account', href: '/account', icon: UserIcon },
    { name: 'Billing', href: '/billing', icon: CreditCardIcon },
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
                element: <Dashboard />
            },
            {
                path: 'projects',
                element: <Projects />
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

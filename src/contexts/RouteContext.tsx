import {
    ArrowLeftOnRectangleIcon,
    ArrowUturnUpIcon,
    Cog6ToothIcon,
    CreditCardIcon,
    UserIcon
} from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthenticationWrapper from '../features/authentication/authentication-wrapper/AuthenticationWrapper';
import Account from '../pages/account/Account';
import { Billing } from '../pages/billing/Billing';
import Dashboard from '../pages/dashboard/Dashboard';
import Deployment from '../pages/deployment/Deployment';
import ErrorPage from '../pages/not-found/ErrorPage';
import Projects from '../pages/projects/Projects';
import Settings from '../pages/settings/Settings';
import LogOut from '../pages/logout/LogOut';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as ProjectsIcon } from '../assets/icons/projects.svg';
import { ReactComponent as DeploymentIcon } from '../assets/icons/deployment.svg';
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';

const mainRoutes = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: true },
    { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon, current: true },
    { name: 'Projects', href: '/projects', icon: ProjectsIcon, current: false },
    { name: 'Deployment', href: '/deployment', icon: DeploymentIcon, current: false }
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
                element: <Deployment />
            },
            {
                path: 'account',
                element: <Account />
            },
            {
                path: 'billing',
                element: <Billing />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'logout',
                element: <LogOut />
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
    userRoutes: userRoutes
});

export default RouteContext;

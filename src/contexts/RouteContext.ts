import { BeakerIcon, HomeIcon } from '@heroicons/react/24/outline';
import React, { ForwardRefExoticComponent, SVGProps } from 'react';

const routes = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Composer', href: '/composer', icon: BeakerIcon, current: false }
];

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

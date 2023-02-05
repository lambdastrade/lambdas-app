import { classNames } from '../../common/classNames';
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import RouteContext from '../../contexts/RouteContext';

const Sidebar: React.FunctionComponent = () => {
    const routeContext = useContext(RouteContext);
    const [routes, setRoutes] = useState(routeContext.routes);
    const routeLocation = useLocation();

    useEffect(() => {
        console.log('route changed to: ' + routeLocation.pathname);
        const updatedRoutes = routeContext.routes.map((route: any) => {
            if (route.href === routeLocation.pathname) {
                return { ...route, current: true };
            } else {
                return { ...route, current: false };
            }
        });
        setRoutes(updatedRoutes);
    }, [routeLocation, routeContext]);

    return (
        <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex w-60 flex-col ">
                <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                    <div className="flex flex-1 align-center justify-center items-center flex-col overflow-y-auto pt-4 pb-4">
                        <div className="flex flex-shrink-0 px-4 text-xl font-jakarta text-gray-800 font-semibold mb-8 cursor-default select-none mt-2">
                            <GlobeEuropeAfricaIcon className="w-7 h-7 mr-3" />
                            lambdas
                        </div>
                        <nav className="mt-5 flex-1" aria-label="Sidebar">
                            <div className="space-y-1 px-3">
                                {routes.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-800'
                                                : 'text-gray-500 hover:text-gray-800 hover:ml-3',
                                            'group flex items-center px-2 py-2 text-base font-semibold font-jakarta rounded-md transition-all duration-200 ease-in-out'
                                        )}>
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-4 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                    <div className="flex justify-center border-t border-gray-200 p-4">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-14 py-2 text-sm text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-jakarta font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

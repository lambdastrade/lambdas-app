import { classNames } from '../../utils/classNames';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import RouteContext from '../../contexts/RouteContext';
import Logo from '../../assets/lambdas_logo.svg';
import SearchBar from '../header/search-bar/SearchBar';

const Sidebar: React.FunctionComponent = () => {
    const routeContext = useContext(RouteContext);
    const [routes, setRoutes] = useState(routeContext.routes);
    const routeLocation = useLocation();

    useEffect(() => {
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
        <div className="flex px-8 border-r  border-gray-200 bg-white py-7">
            <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex flex-1 align-center items-center flex-col overflow-y-auto space-y-4">
                    {/* Logo area */}
                    <div className="flex flex-row items-start self-stretch flex-grow-0">
                        <div className="flex items-center space-x-3 text-gray-700">
                            <img src={Logo} alt="" className="w-8 h-8 opacity-80" />
                            <span className="font-jakarta font-semibold text-lg">Lambdas</span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <SearchBar />

                    {/* Site Navigation  */}
                    <div className="flex flex-col items-start flex-none self-stretch space-y-3">
                        {routes.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                    item.current
                                        ? 'opacity-80 bg-gray-300/40'
                                        : 'opacity-50 hover:opacity-70',
                                    'flex items-center w-full space-x-3 py-3 px-4 transition-all rounded-lg'
                                )}>
                                <item.icon className="w-5 h-5" aria-hidden="true" />
                                <span className="text-gray-800 font-jakarta font-bold text-md">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

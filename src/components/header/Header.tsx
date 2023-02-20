import { Popover } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils/classNames';
import NotificationMenu from './notification-menu/NotificationMenu';
import SearchBar from './search-bar/SearchBar';
import UserMenu from './user-menu/UserMenu';
import Breadcrumb from './Breadcrumb';

const Header: React.FunctionComponent<
    React.PropsWithChildren<{ pageName: string; pageDescription: string }>
> = (props: React.PropsWithChildren<{ pageName: string; pageDescription: string }>) => {
    return (
        <Popover
            as="header"
            className={({ open }) =>
                classNames(
                    open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                    'lg:static lg:overflow-y-visible font-jakarta'
                )
            }>
            <div className="flex flex-col mx-auto w-full pt-2">
                <div className="relative flex justify-between grid-cols-2">
                    <Breadcrumb
                        pageHierarchy={[{ name: props.pageName, href: '#', current: true }]}
                    />
                    <div className="flex justify-end items-center">
                        <NotificationMenu />
                        <UserMenu />
                        <button className="ml-6 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition duration-300 ease-in-out">
                            New Strategy
                        </button>
                    </div>
                </div>
                <div className="relative flex justify-between grid-cols-2 pt-10">
                    <h1 className="text-gray-700 font-bold text-2xl">{props.pageName}</h1>
                    <div className="flex justify-end">
                        {/* <button className="ml-6 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition duration-300 ease-in-out">
                            Export data
                        </button> */}
                    </div>
                </div>
                <p className="text-sm text-gray-400 font-medium pt-3 pb-5">
                    {props.pageDescription}
                </p>
            </div>
        </Popover>
    );
};

export default Header;

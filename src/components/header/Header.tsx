import { Popover } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../common/classNames';
import NotificationMenu from './notification-menu/NotificationMenu';
import SearchBar from './search-bar/SearchBar';
import UserMenu from './user-menu/UserMenu';

const Header: React.FunctionComponent<React.PropsWithChildren<{ children: any }>> = (
    props: React.PropsWithChildren<{ children: any }>
) => {
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <Popover
                as="header"
                className={({ open }) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        ' shadow-sm lg:static lg:overflow-y-visible'
                    )
                }>
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                        <SearchBar />
                        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            <NotificationMenu />
                            <UserMenu />
                            <button className="ml-6 inline-flex items-center rounded-md border border-transparent font-jakarta bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                                New Strategy
                            </button>
                        </div>
                    </div>
                </div>
            </Popover>

            {props.children}
        </div>
    );
};

export default Header;

import { Popover } from '@headlessui/react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { classNames } from '../../utils/classNames';
import NotificationMenu from './notification-menu/NotificationMenu';
import SearchBar from './search-bar/SearchBar';
import UserMenu from './user-menu/UserMenu';

const Header: React.FunctionComponent<React.PropsWithChildren<{ children: any }>> = (
    props: React.PropsWithChildren<{ children: any }>
) => {
    return (
        <div className="w-full flex flex-col bg-gray-50">
            <Popover
                as="header"
                className={({ open }) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'border-b lg:static lg:overflow-y-visible'
                    )
                }>
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                        <SearchBar />

                        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            <NotificationMenu />
                            <UserMenu />
                            <button className="ml-6 inline-flex items-center rounded-md border border-transparent font-jakarta bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                                New Strategy
                            </button>
                        </div>
                    </div>
                </div>
            </Popover>
            <div className="flex-1 overflow-y-auto px-10 py-5">{props.children}</div>
        </div>
    );
};

export default Header;

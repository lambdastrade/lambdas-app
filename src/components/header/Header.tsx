import { Menu, Popover, Transition } from '@headlessui/react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { Children, Fragment } from 'react';
import { classNames } from '../../common/classNames';

const Header: React.FunctionComponent<React.PropsWithChildren<{ children: any }>> = (
    props: React.PropsWithChildren<{ children: any }>
) => {
    const user = {
        name: 'Chelsea Hagon',
        email: 'chelsea.hagon@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' }
    ];

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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-8">
                            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-sm xl:px-0">
                                <div className="w-full">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            <a
                                href="#"
                                className="ml-5 flex-shrink-0 rounded-full  p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </a>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-5 flex-shrink-0">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={user.imageUrl}
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block py-2 px-4 text-sm text-gray-700'
                                                        )}>
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <a
                                href="#"
                                className="ml-6 inline-flex items-center rounded-md border border-transparent font-jakarta bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                New Strategy
                            </a>
                        </div>
                    </div>
                </div>
            </Popover>

            {props.children}
        </div>
    );
};

export default Header;

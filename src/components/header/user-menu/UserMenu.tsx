import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../utils/classNames';
import RouteContext from '../../../contexts/RouteContext';
import useUser from '../../../contexts/UserContext';

const UserMenu: React.FunctionComponent<{}> = () => {
    const routeContext = useContext(RouteContext);
    const userRoutes = routeContext.userRoutes;
    const { userData } = useUser();

    return (
        <>
            <Menu as="div" className="relative ml-2 flex-shrink-0">
                <div>
                    <Menu.Button className="flex rounded-full bg-white transition-all focus:outline-none text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon className="w-7 h-7" />
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
                    <Menu.Items className="absolute -right-10 z-10 mt-3 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="my-2">
                            <div className="flex justify-between py-2 select-none px-4 text-sm font-semibold text-gray-800 font-jakarta">
                                {userData?.name ?? 'John Doe'}
                                <span className="inline-flex items-center rounded-full border-purple-500 border bg-purple-100 cursor-pointer px-2.5 py-0.5 text-xs font-medium text-purple-800">
                                    Pro
                                </span>
                            </div>
                            <div className="px-4 text-xs font-semibold text-gray-400 pb-1 font-jakarta ">
                                14 days left until your subscription renews.
                            </div>
                        </div>
                        <div className="pt-2 pb-1">
                            {userRoutes.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }: any) => (
                                        <Link to={item.href}>
                                            <div
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'flex items-center pl-4 cursor-pointer'
                                                )}>
                                                <item.icon className="w-5 h-5 text-gray-500" />

                                                <div
                                                    className={
                                                        'block py-2.5 px-2.5 text-sm font-medium text-gray-700 font-jakarta'
                                                    }>
                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default UserMenu;

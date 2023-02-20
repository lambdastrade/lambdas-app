import { Menu, Transition } from '@headlessui/react';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { classNames } from '../../../utils/classNames';
import { notification_data } from '../../../data/mocked/notification_data';
import { notificationStyles } from '../../../data/NotificationStyles';

const NotificationMenu: React.FunctionComponent = () => {
    let notifications = notification_data;

    const deleteNotification = (item: any) => {
        notifications = notifications.splice(notifications.indexOf(item), 1); // somehow doesn't update!
    };

    return (
        <>
            <Menu as="div" className="relative ml-2 flex-shrink-0">
                <Menu.Button className="flex rounded-full bg-white focus:outline-none transition-all text-gray-400 hover:text-gray-600">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute -right-10 z-10 mt-3 w-96 origin-top-right divide-y divide-gray-200 rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="flex justify-between pt-2 pb-3 select-none px-4 text-sm font-semibold text-gray-800 font-jakarta">
                            Notifications
                            <span
                                className={classNames(
                                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ',
                                    notifications.length <= 5
                                        ? 'border-teal-600 border bg-teal-100 text-teal-600'
                                        : notifications.length <= 10
                                        ? 'border-orange-600 border bg-orange-100 text-orange-600'
                                        : 'border-red-600 border bg-red-100 text-red-600'
                                )}>
                                {notifications.length}
                            </span>
                        </div>
                        <div className="max-h-80 min-h-fit overflow-auto">
                            {notifications.length === 0 && (
                                <div className="flex items-center justify-center align-middle font-jakarta text-sm text-gray-500 py-3">
                                    No Notifications 😵
                                </div>
                            )}

                            {notifications.map((item) => {
                                const itemStyle = notificationStyles[item.class - 1];
                                return (
                                    <Menu.Item key={item.title}>
                                        {({ active }: any) => (
                                            <div
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'flex items-center pl-5 cursor-pointer py-2'
                                                )}>
                                                <span
                                                    className={classNames(
                                                        'inline-flex items-center rounded-full  border  cursor-pointer px-1 py-1 text-xs font-medium border-red-',
                                                        itemStyle.css
                                                    )}>
                                                    <itemStyle.icon className="w-6 h-6" />
                                                </span>
                                                <div className="block py-2.5 px-4">
                                                    <div className="block pb-1 text-sm font-semibold text-gray-700 font-jakarta">
                                                        {item.title}
                                                    </div>
                                                    <p className="block line-clamp-1 text-xs w-64 font-medium break-words overflow-ellipsis text-gray-400 font-jakarta">
                                                        {item.detail}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        deleteNotification(item);
                                                    }}>
                                                    <XMarkIcon className="w-4 h-4 text-gray-500" />
                                                </button>
                                            </div>
                                        )}
                                    </Menu.Item>
                                );
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default NotificationMenu;

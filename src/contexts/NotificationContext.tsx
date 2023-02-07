import React from 'react';
import { ForwardRefExoticComponent, SVGProps } from 'react';

const notifications = [
    {
        title: 'Subscription Expired!',
        detail: 'Your Pro subscription ended on 28 January. Please renew it to continue using Lambdas.',
        class: 4,
        read: true
    },
    {
        title: 'Your subscription will expire soon!',
        detail: 'Your subscription will end on 28 January. Please renew it to continue using Lambdas.',
        class: 3,
        read: true
    },
    {
        title: 'Bought $BTC',
        detail: 'Bought 1.1000 $BTC at $2140.2239',
        class: 2,
        read: true
    }
];

const enum NotificationClass {
    news = 1,
    information = 2,
    warning = 3,
    urgent = 4
}

interface NotificationContextType {
    notifications: Array<{
        title: string;
        detail: string;
        class: NotificationClass;
        read: boolean;
    }>;
}

const NotificationContext: React.Context<NotificationContextType> = React.createContext({
    notifications: notifications
});

export default NotificationContext;

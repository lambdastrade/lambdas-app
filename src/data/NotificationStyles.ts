import { ExclamationCircleIcon, InformationCircleIcon, NewspaperIcon, XCircleIcon } from "@heroicons/react/24/outline";

export const notificationStyles = [
    {
        icon: NewspaperIcon,
        css: 'border-green-600 text-green-600 bg-green-100'
    },
    {
        icon: InformationCircleIcon,
        css: 'border-blue-600 text-blue-600 bg-blue-100'
    },
    {
        icon: ExclamationCircleIcon,
        css: 'border-orange-600 text-orange-600 bg-orange-100'
    },
    {
        icon: XCircleIcon,
        css: 'border-red-600 text-red-600 bg-red-100'
    }
];

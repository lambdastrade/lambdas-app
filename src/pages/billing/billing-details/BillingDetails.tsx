import { IdentificationIcon, PencilIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import AccountContext from '../../../../contexts/AccountContext';

export const BillingDetails = () => {
    const accountContext = useContext(AccountContext);
    const account = accountContext.account;

    return (
        <div className="px-3 overflow-hidden rounded-lg border border-gray-300 bg-white font-jakarta">
            <div className="py-3 sm:px-6">
                <div className="mx-3 my-2 flex flex-wrap items-center justify-between">
                    <div className="pointer-default select-none flex space-x-3 items-center">
                        <IdentificationIcon className="h-7 w-7 text-gray-700" />
                        <span className="text-md font-semibold text-gray-500">Details</span>
                    </div>
                    <div className=" flex-shrink-0 py-2 px-2">
                        <button
                            type="button"
                            className="relative inline-flex items-center rounded-md text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">
                            <PencilSquareIcon className="w-5 h-5 mr-2 stroke-2" />
                            <span className="text-sm font-medium">Edit</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            <div className="px-4 py-4 sm:px-6">
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
            </div>
        </div>
    );
};

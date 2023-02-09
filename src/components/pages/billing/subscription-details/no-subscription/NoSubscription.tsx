import { PlusIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SubscribeModal from '../../../../modals/subscribe-modal/SubscribeModal';

const NoSubscription = () => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const res = axios.get(import.meta.env.VITE_API_URL).then(res => console.log(res));
    }, []);

    return (
        <div className="py-5 px-5 font-jakarta">
            <div className="text-center">
                <span className="text-3xl">🤷‍♂️</span>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No subscription!</h3>
                <p className="mt-1 text-sm text-gray-500">
                    Choose a plan, then start building killer projects.
                </p>
                <div className="mt-6">
                    <button
                        onClick={() => {
                            setModalOpen(true);
                        }}
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Subscribe Now
                    </button>
                </div>
                <SubscribeModal state={modalOpen} setModalOpen={setModalOpen} />
            </div>
        </div>
    );
};

export default NoSubscription;

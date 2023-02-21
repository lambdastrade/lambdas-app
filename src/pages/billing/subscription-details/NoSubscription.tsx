import PaymentModal from '../../../features/payments/components/PaymentModal';

const NoSubscription = () => {
    return (
        <div className="pb-5 pt-10 px-5 font-jakarta">
            <div className="text-center">
                <span className="text-5xl">🤷‍♂️</span>
                <h3 className="mt-2 text-base font-medium text-gray-900">No subscription!</h3>
                <p className="mt-1 text-base text-gray-500">
                    Choose a plan, then start building killer projects.
                </p>
                <div className="mt-6">
                    <PaymentModal />
                </div>
            </div>
        </div>
    );
};

export default NoSubscription;

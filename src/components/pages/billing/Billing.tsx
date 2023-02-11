import { BillingDetails } from './billing-details/BillingDetails';
import { SubscriptionDetails } from './subscription-details/SubscriptionDetails';

export const Billing = () => {
    return (
        <>
            <div className="space-y-5">
                <h3 className="p-1 text-xl font-semibold text-gray-700 border-gray-400 font-jakarta">
                    Billing Information
                </h3>
                <SubscriptionDetails />
            </div>
        </>
    );
};

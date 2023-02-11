import { BillingDetails } from './billing-details/BillingDetails';
import { SubscriptionDetails } from './subscription-details/SubscriptionDetails';

export const Billing = () => {
    return (
        <>
            <div className="px-16 py-5 ">
                <div className="border-b border-gray-400 pb-4 mb-10 font-jakarta">
                    <h3 className="text-xl font-medium leading-7 text-gray-800">
                        Billing Information
                    </h3>
                </div>
                <div className="space-y-5">
                    {/* <BillingDetails /> */}
                    <SubscriptionDetails />
                </div>
            </div>
        </>
    );
};

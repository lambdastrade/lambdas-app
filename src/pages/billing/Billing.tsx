import Header from '../../components/header/Header';
import { BillingDetails } from './billing-details/BillingDetails';
import { SubscriptionDetails } from './subscription-details/SubscriptionDetails';

export const Billing = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <Header
                    pageName="Billing"
                    pageDescription="Manage your subscriptions and payment information."
                />
                <SubscriptionDetails />
            </div>
        </>
    );
};

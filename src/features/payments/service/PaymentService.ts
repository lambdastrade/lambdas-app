import axios from 'axios';
import { SubscriptionTier } from '../../../ts/interfaces/SubscriptionTier';
import { loadStripe, Stripe } from '@stripe/stripe-js';

export const getTiers: () => Promise<SubscriptionTier[]> = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/payments/tiers`);
    try {
        const tiers: SubscriptionTier[] = res.data.tiers;
        return tiers;
    } catch (error: unknown) {
        throw new Error('Failed to fetch tiers.');
    }
};

// export const getStripeConfig: () => Promise<Stripe | null> = async () => {
//     try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/payments/config`);
//         return loadStripe(res.data.publishable_key);
//     } catch (error: unknown) {
//         throw new Error('Failed to fetch Stripe config.');
//     }
// };

export const createSubscription: (tierId: string, redirectUrl?: string) => any = async (
    tierId: string,
    redirectUrl?: string,
) => {
    try {
        const res = await axios.post(
            `${
                import.meta.env.VITE_API_URL
            }/payments/subscription/${tierId}/${redirectUrl ? `?redirect=${redirectUrl}` : ''}`
        );
        return res.data.checkout_url;
    } catch (error: unknown) {
        throw new Error('Failed to create a Stripe checkout page.');
    }
};

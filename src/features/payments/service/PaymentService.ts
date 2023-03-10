import axios from 'axios';
import { SubscriptionTier } from '../../../ts/interfaces/SubscriptionTier';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { api } from '../../../utils/axiosInstances';

export const getTiers: () => Promise<SubscriptionTier[]> = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/payments/tiers`);
    try {
        const tiers: SubscriptionTier[] = res.data.tiers;
        return tiers;
    } catch (error: unknown) {
        throw new Error('Failed to fetch tiers.');
    }
};

export const createSubscription: (tierId: string, redirectUrl?: string) => any = async (
    tierId: string,
    redirectUrl?: string
) => {

    try {
        const res = await api.post(
            `${
                import.meta.env.VITE_API_URL
            }/payments/subscription/${tierId}/${redirectUrl ? `?redirect=${redirectUrl}` : ''}`
        );
        return res.data.checkout_url;
    } catch (error: unknown) {
        console.log(error);
        throw new Error('Failed to create a Stripe checkout page.');
    }
};

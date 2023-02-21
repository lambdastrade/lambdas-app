import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { SubscriptionTier } from '../../../ts/interfaces/SubscriptionTier';
import { classNames } from '../../../utils/classNames';
import { createSubscription } from '../service/PaymentService';

interface TierListProps {
    tiers: SubscriptionTier[];
}

const TierList = (props: TierListProps) => {
    const tiers = props.tiers;
    const [selectedSubscription, setSelectedSubscription] = useState(tiers[tiers.length - 1]);

    const onCheckoutClick = (tierId: string) => {
        const fetchData = async () => {
            const checkoutUrl: string = await createSubscription(tierId);
            window.location.href = checkoutUrl;
        };
        fetchData();
    };

    return (
        <>
            {tiers && (
                <RadioGroup value={selectedSubscription} onChange={setSelectedSubscription}>
                    <RadioGroup.Label className="text-2xl flex justify-center pb-5 font-semibold text-white">
                        Select your Plan
                    </RadioGroup.Label>

                    <div className="mt-4 lg:mx-32 h-fit grid gap-y-6 grid-cols-2 gap-x-4 select-none">
                        {tiers.map((tier) => (
                            <RadioGroup.Option key={tier.id} value={tier}>
                                {({ checked }) => (
                                    <>
                                        <span className="flex flex-1">
                                            <span className="flex flex-col">
                                                <div
                                                    key={tier.id}
                                                    className={classNames(
                                                        checked
                                                            ? 'border-transparent ring-2 ring-offset-8  ring-white'
                                                            : 'ring-1 ring-black/10 opacity-60 hover:opacity-80',
                                                        'relative flex cursor-pointer border-none bg-white p-4 transition-all outline-none',
                                                        'flex flex-col rounded-2xl'
                                                    )}>
                                                    <div className="p-3">
                                                        <h3
                                                            className="text-base pb-2 font-semibold tracking-tight text-gray-800"
                                                            id={tier.id}>
                                                            {tier.name}
                                                        </h3>
                                                        <div className="mt-1 flex items-baseline text-2xl font-bold tracking-tight text-gray-900">
                                                            ${tier.priceMonthly}
                                                            <span className="text-lg font-medium leading-5 tracking-normal text-gray-400">
                                                                /mo.
                                                            </span>
                                                        </div>
                                                        <p className="my-3 text-base leading-4 tracking-wide text-gray-400">
                                                            {tier.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-1 flex-col p-1">
                                                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-100 p-5">
                                                            <ul role="list" className="space-y-4">
                                                                {tier.features.map((feature) => (
                                                                    <li
                                                                        key={feature}
                                                                        className="flex items-start align-middle">
                                                                        <div className="flex-shrink-0">
                                                                            <CheckIcon
                                                                                className="h-5 w-5 stroke-2 mb-1 text-gray-800"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </div>
                                                                        <p className="ml-3 text-sm font-medium text-gray-600">
                                                                            {feature}
                                                                        </p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="mt-8">
                                                                <button
                                                                    onClick={() => {
                                                                        onCheckoutClick(tier.id);
                                                                    }}
                                                                    className="inline-block w-full rounded-lg bg-gray-800 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white hover:bg-gray-900"
                                                                    aria-describedby={tier.id}>
                                                                    Choose plan
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            )}
        </>
    );
};

export default TierList;

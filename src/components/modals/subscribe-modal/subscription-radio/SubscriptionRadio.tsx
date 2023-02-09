import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { classNames } from '../../../../common/classNames';

const tiers = [
    {
        id: 'tier-basic',
        name: 'Basic',
        href: '#',
        priceMonthly: 42.5,
        description:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
        features: [
            'Pariatur quod similique',
            'Sapiente libero doloribus modi nostrum',
            'Vel ipsa esse repudiandae excepturi',
            'Itaque cupiditate adipisci quibusdam'
        ]
    },
    {
        id: 'tier-pro',
        name: 'Professional',
        href: '#',
        priceMonthly: 69.5,
        description:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
        features: [
            'Pariatur quod similique',
            'Sapiente libero doloribus modi nostrum',
            'Vel ipsa esse repudiandae excepturi',
            'Itaque cupiditate adipisci quibusdam',
            'Sapiente libero doloribus modi nostrum'
        ]
    }
];

const SubscriptionRadio = () => {
    const [selectedSubscription, setSelectedSubscription] = useState(tiers[0]);

    return (
        <RadioGroup value={selectedSubscription} onChange={setSelectedSubscription}>
            <RadioGroup.Label className="text-2xl flex justify-center pb-5 font-semibold text-gray-700">
                Select your Plan
            </RadioGroup.Label>

            <div className="mt-4 mx-20 h-fit grid gap-y-6 grid-cols-2 gap-x-4 select-none">
                {tiers.map((tier) => (
                    <RadioGroup.Option key={tier.id} value={tier}>
                        {({ checked }) => (
                            <>
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <div
                                            key={tier.name}
                                            className={classNames(
                                                checked
                                                    ? 'border-transparent ring-2 ring-indigo-600 shadow-2xl'
                                                    : 'border-gray-300',
                                                ' relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                                                'flex flex-col rounded-2xl bg-white shadow-xl ring-1 ring-black/10'
                                            )}>
                                            <div className="p-3">
                                                <h3
                                                    className="text-base pb-2 font-semibold tracking-tight text-indigo-600"
                                                    id={tier.id}>
                                                    {tier.name}
                                                </h3>
                                                <div className="mt-1 flex items-baseline text-2xl font-bold tracking-tight text-gray-900">
                                                    ${tier.priceMonthly}
                                                    <span className="text-lg font-semibold leading-5 tracking-normal text-gray-500">
                                                        /mo
                                                    </span>
                                                </div>
                                                <p className="my-3 text-base leading-4 tracking-wide text-gray-400">
                                                    {tier.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-1 flex-col p-2">
                                                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-100 p-5">
                                                    <ul role="list" className="space-y-4">
                                                        {tier.features.map((feature) => (
                                                            <li
                                                                key={feature}
                                                                className="flex items-start align-middle">
                                                                <div className="flex-shrink-0">
                                                                    <CheckIcon
                                                                        className="h-5 w-5 stroke-2 mb-1 text-indigo-600"
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
                                                        <a
                                                            href={tier.href}
                                                            className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                                                            aria-describedby={tier.id}>
                                                            Choose plan
                                                        </a>
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
    );
};

export default SubscriptionRadio;

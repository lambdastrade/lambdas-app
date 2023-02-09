import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useRef, useState } from 'react';
import SubscriptionRadio from './subscription-radio/SubscriptionRadio';

const SubscribeModal = (props: any) => {
    const open = props.state;
    const setModalOpen = props.setModalOpen;

    const nextPage = () => {}; // TODO

    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'upcoming' },
        { name: 'Step 3', status: 'upcoming' },
        { name: 'Step 4', status: 'upcoming' }
    ];

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto font-jakarta">
                        <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-1/2">
                                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => setModalOpen(false)}>
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <div className="mt-12 mb-16">
                                        <SubscriptionRadio />
                                    </div>
                                    <div className="">
                                        <nav
                                            className="flex items-center justify-center"
                                            aria-label="Progress">
                                            <ol role="list" className="flex items-center space-x-4">
                                                {steps.map((step) => (
                                                    <li key={step.name}>
                                                        {step.status === 'complete' ? (
                                                            <a
                                                                href="#"
                                                                className="block h-2 w-2 rounded-full bg-indigo-600 hover:bg-indigo-900">
                                                                <span className="sr-only">
                                                                    {step.name}
                                                                </span>
                                                            </a>
                                                        ) : step.status === 'current' ? (
                                                            <a
                                                                href="#"
                                                                className="relative flex items-center justify-center"
                                                                aria-current="step">
                                                                <span
                                                                    className="absolute flex h-5 w-5 p-px"
                                                                    aria-hidden="true">
                                                                    <span className="h-full w-full rounded-full bg-indigo-200" />
                                                                </span>
                                                                <span
                                                                    className="relative block h-2.5 w-2.5 rounded-full bg-indigo-600"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="sr-only">
                                                                    {step.name}
                                                                </span>
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href="#"
                                                                className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                                                                <span className="sr-only">
                                                                    {step.name}
                                                                </span>
                                                            </a>
                                                        )}
                                                    </li>
                                                ))}
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => nextPage()}>
                                            Continue
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                                            onClick={() => setModalOpen(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default SubscribeModal;

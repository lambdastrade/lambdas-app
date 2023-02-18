import { CalendarDaysIcon, TrophyIcon } from '@heroicons/react/24/outline';

export const ContentSection = () => {
    return (
        <div className="flex py-5 px-5 font-jakarta justify-between items-center">
            <div className="w-1/2 my-5">
                <div className="flex space-x-2 mb-2 items-center text-gray-800">
                    <TrophyIcon className="w-5 h-5" />
                    <span>
                        <h4 className="text-lg font-semibold ">Professional</h4>
                    </span>
                </div>

                <p className="mt-3 ml-2 pl-3 py-1 border-l-2 border-gray-300 w-2/3 text-sm text-gray-500">
                    Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia
                    omnis voluptatem. Minus quidem ipsam quia iusto.
                </p>
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="flex space-x-2 items-center justify-end">
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-3xl font-semibold text-gray-800">
                            $69.50 <span className="text-lg text-gray-500 font-medium">/mo.</span>
                        </h4>

                        <div className="flex flex-row-reverse cursor-default select-none">
                            <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                                <CalendarDaysIcon className="w-5 h-5 mr-1" />
                                Yearly
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

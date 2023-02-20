import { CalendarDaysIcon, FunnelIcon } from '@heroicons/react/24/outline';

const StatsFilterGroup = () => {
    return (
        <div className="flex space-x-2 text-sm text-gray-700">
            <button
                type="button"
                className="flex border border-gray-300 items-center rounded-md font-semibold bg-white px-4 py-2 hover:bg-gray-100 focus:outline-none">
                <CalendarDaysIcon className="w-5 h-5 mr-3" />
                Select dates
            </button>
            <button
                type="button"
                className="flex border border-gray-300 items-center rounded-md font-semibold bg-white px-4 py-2 hover:bg-gray-100 focus:outline-none">
                <FunnelIcon className="w-5 h-5 mr-3" />
                Filters
            </button>
        </div>
    );
};

export default StatsFilterGroup;

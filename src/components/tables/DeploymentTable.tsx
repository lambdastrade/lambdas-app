import { Cog6ToothIcon, PencilIcon, StopIcon } from '@heroicons/react/24/outline';
import deployment_data from '../../data/mocked/deployment_data';
import getRelativeTime from '../../utils/getRelativeTime';

const DeploymentTable = () => {
    let table_items: any[] = deployment_data;
    table_items.forEach((item) => {
        item.time_since_start = getRelativeTime(item.start_time);
    });
    return (
        <div className="my-10 space-y-5">
            <h3 className="font-semibold text-md ml-3 text-gray-400">Active Deployments</h3>
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg font-jakarta">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 text-gray-800">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                                Strategy
                            </th>
                            <th
                                scope="col"
                                className="hidden text-left px-3 py-3.5 text-sm font-semibold lg:table-cell">
                                Started
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-center text-sm font-semibold">
                                Trades per day
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                Type
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-center text-sm font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {table_items.map((table_items) => (
                            <tr
                                key={table_items.strategy}
                                className="cursor-pointer hover:bg-gray-100 transition-all">
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-semibold  text-gray-600 sm:w-auto sm:max-w-none sm:pl-6">
                                    {table_items.strategy}
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="mt-1 truncate text-gray-700">
                                            {table_items.start_time}
                                        </dd>
                                        <dt className="sr-only sm:hidden">Email</dt>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                                            {table_items.daily_trades}
                                        </dd>
                                    </dl>
                                </td>
                                <td className="hidden text-left px-3  max-w-sm py-4 text-sm text-gray-500 lg:table-cell">
                                    {table_items.time_since_start}
                                </td>
                                <td className="hidden text-center px-3 max-w-sm py-4 text-sm text-gray-500 lg:table-cell">
                                    {table_items.daily_trades}
                                </td>
                                <td className="hidden text-left px-3 max-w-sm py-4 text-sm text-gray-500 lg:table-cell">
                                    <span className="inline-flex items-center rounded-md border border-gray-400 bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                                        <svg
                                            className="-ml-0.5 mr-1.5 h-2 w-2 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 8 8">
                                            <circle cx={4} cy={4} r={3} />
                                        </svg>
                                        {table_items.type}
                                    </span>
                                </td>
                                <td className="space-x-3 py-5 text-center align-middle text-sm font-medium text-gray-400">
                                    <button>
                                        <StopIcon className="w-5 h-5 fill-red-500 stroke-red-500 hover:text-red-600 hover:fill-red-600 transition-all" />
                                    </button>
                                    <button>
                                        <Cog6ToothIcon className="w-5 h-5 hover:text-gray-800 transition-all" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeploymentTable;

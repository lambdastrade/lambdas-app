import { Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/outline';
import activity_data from '../../../data/mocked/activity_data';

const ActivityLog = () => {
    const log_items = activity_data;
    return (
        <div className="my-10 space-y-5">
            <h3 className="font-semibold text-md ml-3 text-gray-400">Activity Log</h3>
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg font-jakarta">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 text-gray-800">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">
                                Description
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-center text-sm font-semibold">
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-center text-sm font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {log_items.map((log_item) => (
                            <tr
                                key={log_item.name}
                                className="cursor-pointer hover:bg-gray-100 transition-all">
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-semibold  text-gray-600 sm:w-auto sm:max-w-none sm:pl-6">
                                    {log_item.name}
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="mt-1 truncate text-gray-700">
                                            {log_item.running_instances}
                                        </dd>
                                        <dt className="sr-only sm:hidden">Email</dt>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                                            {log_item.components}
                                        </dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 max-w-sm py-4 text-sm text-gray-500 lg:table-cell">
                                    {log_item.description}
                                </td>
                                <td className="hidden px-3 py-4 text-center align-middle text-sm text-gray-500 sm:table-cell">
                                    {log_item.components}
                                </td>
                                <td className="space-x-3 py-5 text-center align-middle text-sm font-medium text-gray-400">
                                    <button>
                                        <PencilIcon className="w-5 h-5 hover:text-gray-800 transition-all" />
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

export default ActivityLog;

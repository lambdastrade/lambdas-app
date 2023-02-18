import { ChevronDownIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/outline';
import project_data from '../../data/mocked/project_data';

const UserTable = () => {
    const projects = project_data;
    return (
        <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg font-jakarta">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-6">
                            Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-700 lg:table-cell">
                            Description
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-700 sm:table-cell">
                            Components
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-center text-sm font-semibold text-gray-700">
                            Running
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-center text-sm font-semibold text-gray-700 ">
                            Weekly Trades
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-center text-sm font-semibold text-gray-700">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {projects.map((project) => (
                        <tr
                            key={project.name}
                            className="cursor-pointer hover:bg-gray-100 transition-all">
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                {project.name}
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="mt-1 truncate text-gray-700">
                                        {project.running_instances}
                                    </dd>
                                    <dt className="sr-only sm:hidden">Email</dt>
                                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                                        {project.components}
                                    </dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 max-w-sm py-4 text-sm text-gray-500 lg:table-cell">
                                {project.description}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell text-center">
                                {project.components}
                            </td>
                            <td className="px-3 py-4 text-sm text-gray-500 text-center">
                                {project.running_instances}
                            </td>
                            <td className="px-3 py-4 text-sm text-gray-500 text-center">
                                {project.avg_trades}
                            </td>
                            <td className="space-x-3 py-5 text-right text-sm font-medium sm:pr-6 align-middle text-gray-400">
                                <button>
                                    <PencilIcon className="w-5 h-5 hover:text-gray-800 transition-all" />
                                </button>
                                <button>
                                    <Cog6ToothIcon className="w-5 h-5 hover:text-gray-800 transition-all" />
                                </button>
                                <button>
                                    <ChevronDownIcon className="w-5 h-5 hover:text-gray-800 mt-2 transition-all" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

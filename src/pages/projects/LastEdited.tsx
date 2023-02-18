import { ArrowRightIcon } from '@heroicons/react/24/outline';
import project_data from '../../data/mocked/project_data';
import { classNames } from '../../utils/classNames';

const LastEdited = () => {
    let lastEditedProjects: any[] = [...project_data.slice(0, Math.min(4, project_data.length))];
    const bgColorSequence = ['bg-emerald-600', 'bg-indigo-500', 'bg-orange-400', 'bg-purple-500'];
    for (let i = 0; i < lastEditedProjects.length; i++) {
        lastEditedProjects[i].hue = bgColorSequence[i];
    }

    return (
        <div className="font-jakarta px-5 pb-5">
            <h2 className="text-sm font-medium text-gray-500">Recently Edited</h2>
            <ul
                role="list"
                className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {lastEditedProjects.map((project: any) => (
                    <li key={project.name} className="col-span-1 flex rounded-md shadow-sm hover:scale-105 cursor-pointer transform transition-all">
                        <div
                            className={classNames(
                                project.hue,
                                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                            )}>
                            {project.name.slice(0, 2)}
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                <a
                                    // href={project.href}
                                    className="font-medium text-gray-900">
                                    {project.name}
                                </a>
                                <p className="text-gray-500">
                                    {project.components} components
                                </p>
                            </div>
                            <div className="flex-shrink-0 pr-2">
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400">
                                    <span className="sr-only">Open options</span>
                                    <ArrowRightIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LastEdited;

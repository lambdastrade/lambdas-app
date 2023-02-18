import { classNames } from '../../utils/classNames';

// heading tabs: remove hidden

const DeploymentHeading = () => {
    const tabs = [
        { name: 'Overview', href: '#', current: true },
        { name: 'Analytics', href: '#', current: false },
        { name: 'Portfolio', href: '#', current: false },
        { name: 'History', href: '#', current: false }
    ];
    return (
        <div className="flex justify-between items-center p-1 font-jakarta">
            <h3 className="text-xl font-semibold text-gray-700">Deployment</h3>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        defaultValue={tabs.find((tab) => tab.current)?.name}>
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block hidden">
                    <nav className="flex space-x-4" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'bg-gray-200 text-gray-600'
                                        : 'text-gray-400 hover:text-gray-600',
                                    'px-3 py-2 font-semibold text-sm rounded-md transition-all'
                                )}
                                aria-current={tab.current ? 'page' : undefined}>
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DeploymentHeading;

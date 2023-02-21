import KPIChart from '../charts/KPIChart';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../utils/classNames';

const stats = [
    {
        id: 1,
        name: 'Running Instances',
        stat: '$ 27,897',
        change: '$ 1,200',
        changeType: 'increase'
    },
    {
        id: 2,
        name: 'Avg. Lifetime',
        stat: '133',
        change: '19',
        changeType: 'decrease'
    },
    {
        id: 3,
        name: 'Instance Heatmap',
        stat: '127.3%',
        change: '3.2%',
        changeType: 'increase'
    },
    {
        id: 4,
        name: 'Est. Latency',
        stat: '$ 27,897',
        change: '$ 1,200',
        changeType: 'increase'
    },
    {
        id: 5,
        name: 'Instance Health',
        stat: '133',
        change: '19',
        changeType: 'decrease'
    },
    {
        id: 6,
        name: 'Overload',
        stat: '127.3%',
        change: '3.2%',
        changeType: 'increase'
    }
];

const DeploymentCards = () => {
    return (
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
                <div
                    key={item.id}
                    className="relative overflow-hidden rounded-lg border grid grid-cols-2 border-gray-300 space-y-5 bg-white px-4 py-6 sm:px-6 sm:pt-6">
                    <div className="col-span-1 space-y-3">
                        <dt className="truncate text-sm text-gray-600 font-semibold">
                            {item.name}
                        </dt>
                        <dd className="flex flex-col space-y-2">
                            <p className="text-2xl font-bold text-gray-700">{item.stat}</p>
                            <div
                                className={classNames(
                                    item.changeType === 'increase'
                                        ? 'text-green-600'
                                        : 'text-red-600',
                                    'flex items-baseline text-sm font-semibold'
                                )}>
                                {item.changeType === 'increase' ? (
                                    <ArrowUpRightIcon
                                        className="h-4 w-4 flex-shrink-0 self-center stroke-2 text-green-500"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArrowDownRightIcon
                                        className="h-4 w-4 flex-shrink-0 self-center stroke-2 text-red-500"
                                        aria-hidden="true"
                                    />
                                )}
                                <span className="sr-only">
                                    {' '}
                                    {item.changeType === 'increase'
                                        ? 'Increased'
                                        : 'Decreased'} by{' '}
                                </span>
                                <span className="pl-1">{item.change}</span>
                            </div>
                        </dd>
                    </div>
                    <div className="col-span-1">
                        <KPIChart />
                    </div>
                </div>
            ))}
        </dl>
    );
};

export default DeploymentCards;

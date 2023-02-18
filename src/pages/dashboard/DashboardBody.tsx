import UserCard from '../../components/cards/UserCard';
import PortfolioChart from '../../components/charts/PortfolioChart';

const DashboardBody = () => {
    return (
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 font-jakarta gap-5">
            <div className="rounded-lg col-span-5 row-span-2 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                <UserCard />
            </div>
            <div className="rounded-lg col-span-4 row-span-3 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                Portfolio
                <PortfolioChart />
            </div>
            <div className="rounded-lg col-span-3 row-span-1 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                Quick Actions
            </div>
            <div className="rounded-lg col-span-3 row-span-5 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                Notifications
            </div>
            <div className="rounded-lg col-span-5 row-span-4 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                Activity Log
            </div>
            <div className="rounded-lg col-span-4 row-span-3 p-5 ring-1 ring-black ring-opacity-5 text-gray-700 font-semibold bg-white">
                Analytics
            </div>
        </div>
    );
};

export default DashboardBody;

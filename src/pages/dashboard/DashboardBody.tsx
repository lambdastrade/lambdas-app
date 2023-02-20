import ActivityLog from '../../features/activity-log/components/ActivityLog';
import KPICards from './KPICards';
import StatsFilterGroup from './StatsFilterGroup';
import TimeButtonGroup from './TimeButtonGroup';

const DashboardBody = () => {
    return (
        <div className="font-jakarta w-full h-full flex flex-col flex-1">
            <div className="flex justify-between items-center col-span-12">
                <TimeButtonGroup />
                <StatsFilterGroup />
            </div>
            <KPICards />
            <ActivityLog />
        </div>
    );
};

export default DashboardBody;

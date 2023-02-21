import KPICards from '../../components/cards/KPICards';
import ActivityTable from '../../components/tables/ActivityTable';
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
            <ActivityTable />
        </div>
    );
};

export default DashboardBody;

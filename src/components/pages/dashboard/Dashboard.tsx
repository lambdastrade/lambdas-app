import DashboardBody from './DashboardBody';
import DashboardHeading from './DashboardHeading';

const Dashboard: React.FunctionComponent = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <DashboardHeading />
                <DashboardBody />
            </div>
        </>
    );
};

export default Dashboard;

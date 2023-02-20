import Header from '../../components/header/Header';
import DashboardBody from './DashboardBody';
import DashboardHeading from './DashboardHeading';

const Dashboard: React.FunctionComponent = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <Header
                    pageName="Dashboard"
                    pageDescription="Take a bird's eye view at your Lambdas account."
                />
                <DashboardBody />
            </div>
        </>
    );
};

export default Dashboard;

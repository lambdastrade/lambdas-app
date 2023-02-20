import Header from '../../components/header/Header';
import DeploymentBody from './DeploymentBody';

const Deployment: React.FunctionComponent = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <Header
                    pageName="Deployment"
                    pageDescription="Spin up and manage strategy instances easily."
                />
                <DeploymentBody />
            </div>
        </>
    );
};

export default Deployment;

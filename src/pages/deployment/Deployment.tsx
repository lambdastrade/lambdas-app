import DeploymentBody from "./DeploymentBody";
import DeploymentHeading from "./DeploymentHeading";

const Deployment: React.FunctionComponent = () => {
    return (
        <>
            <div className="space-y-5 w-full h-full flex flex-col flex-1">
                <DeploymentHeading />
                <DeploymentBody />
            </div>
        </>
    );
};

export default Deployment;

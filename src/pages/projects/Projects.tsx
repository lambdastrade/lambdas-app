import Header from '../../components/header/Header';
import LastEdited from './LastEdited';
import ProjectsHeading from './ProjectsHeading';
import UserTable from './UserTable';

const Projects: React.FunctionComponent = () => {
    return (
        <>
            <Header pageName="Projects" pageDescription="An overview of your killer projects." />
            <div className="space-y-5">
                {/* <ProjectsHeading /> */}
                <LastEdited />
                <UserTable />
            </div>
        </>
    );
};

export default Projects;

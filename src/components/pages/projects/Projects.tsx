import LastEdited from "./LastEdited";
import ProjectsHeading from "./ProjectsHeading";
import UserTable from "./UserTable";

const Projects: React.FunctionComponent = () => {

    return (
        <>
            <div className="space-y-5">
                <ProjectsHeading />
                <LastEdited />
                <UserTable />
            </div>
        </>
    );
};

export default Projects;

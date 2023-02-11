import ProjectsHeading from "./ProjectsHeading";
import UserTable from "./UserTable";

const Projects: React.FunctionComponent = () => {
    

    return (
        <>
            <div className="space-y-5">
                <ProjectsHeading />
                <UserTable />
            </div>
        </>
    );
};

export default Projects;

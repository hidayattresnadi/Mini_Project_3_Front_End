import ProjectDetail from "../widgets/dataDetail";
import '../../bookCard.css'
import Container from "../elements/container";

const ProjectDetailCard = ({ detailProject, detailDepartment }) => {
    return (
        <>
            <Container className="book-details">
                <ProjectDetail label="Id" value={detailProject.id} />
                <ProjectDetail label="Project Name" value={detailProject.projName} />
                <ProjectDetail label="Department" value={detailDepartment? detailDepartment.deptName: 'Not Available'} />
            </Container>
        </>

    );
};

export default ProjectDetailCard;

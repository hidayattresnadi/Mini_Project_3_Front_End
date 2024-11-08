import WorksOnDetail from "../widgets/dataDetail";
import '../../bookCard.css'
import Container from "../elements/container";

const WorksOnDetailCard = ({ detailWorksOn, detailEmployee, detailProject }) => {
    return (
        <>
            <Container className="book-details">
                <WorksOnDetail label="Id" value={detailWorksOn.id} />
                <WorksOnDetail label="Project Name" value={detailProject.projName} />
                <WorksOnDetail label="Employee Name" value={`${detailEmployee.fName} ${detailEmployee.lName}`} />
                <WorksOnDetail label="Date Worked" value={detailWorksOn.dateWorked} />
                <WorksOnDetail label="Hours Worked" value={detailWorksOn.hoursWorked} />
            </Container>
        </>

    );
};

export default WorksOnDetailCard;

import DepartmentDetail from "../widgets/dataDetail";
import '../../bookCard.css'
import Container from "../elements/container";

const DepartmentDetailCard = ({ detailDepartment, manager }) => {
    return (
        <>
            <Container className="book-details">
                <DepartmentDetail label="Id" value={detailDepartment.id} />
                <DepartmentDetail label="Department Name" value={detailDepartment.deptName} />
                <DepartmentDetail label="Manager Name" value={manager ? `${manager.fName} ${manager.lName}` : 'Not Available'} />
            </Container>
        </>

    );
};

export default DepartmentDetailCard;

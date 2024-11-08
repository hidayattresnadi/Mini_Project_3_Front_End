import EmployeeDetail from "../widgets/dataDetail";
import '../../bookCard.css'
import Container from "../elements/container";

const EmployeeDetailCard = ({ detailEmployee, department }) => {
    return (
        <>
            <Container className="book-details">
                <EmployeeDetail label="Id" value={detailEmployee.id} />
                <EmployeeDetail label="First Name" value={detailEmployee.fName} />
                <EmployeeDetail label="Last Name" value={detailEmployee.lName} />
                <EmployeeDetail label="Date of Birth" value={detailEmployee.dob} />
                <EmployeeDetail label="Sex" value={detailEmployee.sex} />
                <EmployeeDetail label="Position" value={detailEmployee.position} />
                <EmployeeDetail label="Department" value={department ? department.deptName : 'Not Available'} />
                <EmployeeDetail label="Address" value={detailEmployee.address} />
            </Container>
        </>

    );
};

export default EmployeeDetailCard;

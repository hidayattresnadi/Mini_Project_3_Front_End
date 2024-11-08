import { useParams } from 'react-router-dom';
import EmployeeDetailCard from '../modules/employeeCard';
import DetailLayout from '../templates/detailLayout';
import WorksOnsPage from './WorksOnsPage';

function EmployeeDetailPage({ employees, projects, departments, worksOns, columns, onEdit, onDelete }) {
    const { id } = useParams();
    const detailEmployee = employees.find((employee) => employee.id == id);
    const department = departments.find((department) => department.id === detailEmployee.deptNo)
    const worksOnEmployees = worksOns.filter((worksOn) => worksOn.empNo === id);
    return (
        <>
            <DetailLayout title={'Employee Details'}>
                <EmployeeDetailCard
                    detailEmployee={detailEmployee} department={department}
                />
            </DetailLayout>

            <WorksOnsPage worksOns={worksOnEmployees} projects={projects} employees={employees} columns={columns} onEdit={onEdit} onDelete={onDelete} />
        </>

    )
}

export default EmployeeDetailPage;
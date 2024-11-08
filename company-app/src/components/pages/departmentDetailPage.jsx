import { useParams } from 'react-router-dom';
import DetailLayout from '../templates/detailLayout';
import DepartmentDetailCard from '../modules/departmentCard';
import EmployeesPage from './employeesPage';

function DepartmentDetailPage({ departments, employees, onEdit, onDelete, columns }) {
    const { id } = useParams();
    const detailDepartment = departments.find((department) => department.id == id);
    const manager = employees.find((employee) => employee.id === detailDepartment.mgrEmpNo);
    const departmentEmployees = employees.filter((employee) => employee.deptNo === id);
    return (
        <>
            <DetailLayout title={'Department Details'}>
                <DepartmentDetailCard detailDepartment={detailDepartment} manager={manager} />
            </DetailLayout>
            <EmployeesPage employees={departmentEmployees} departments={departments} columns={columns} onEdit={onEdit} onDelete={onDelete} />
        </>


    )
}

export default DepartmentDetailPage;
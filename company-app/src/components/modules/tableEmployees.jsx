import TableHeader from '../widgets/tableHeader';
import TableEmployeeRow from '../widgets/tableEmployeeRow';
import { useNavigate } from 'react-router-dom';


const TableEmployees = ({ employees, departments, onEdit, onDelete, columns }) => {
    const navigate = useNavigate();
    return (
        <>
            <table className="table table-bordered text-center">
                <TableHeader columns={columns} />
                <tbody>
                    {employees.map((employee) => (
                        <TableEmployeeRow
                            key={employee.id}
                            department={departments.find((department)=>department.id === employee.deptNo)}
                            employee={employee}
                            departments = {departments}
                            onEdit={() => {
                                onEdit(employee.id)
                                navigate(`/employees/${employee.id}`)
                            }}
                            onDelete={() => onDelete(employee.id)}
                            onDetail={() => {
                                navigate(`/employees/detail/${employee.id}`)
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </>

    )

};

export default TableEmployees;

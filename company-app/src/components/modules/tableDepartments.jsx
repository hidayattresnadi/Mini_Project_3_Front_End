import TableHeader from '../widgets/tableHeader';
import TableDepartmentRow from '../widgets/tableDepartmentRow';
import { useNavigate } from 'react-router-dom';


const TableDepartments = ({ departments, onEdit, onDelete, columns, employees }) => {
    const navigate = useNavigate();
    return (
        <>
            <table className="table table-bordered text-center">
                <TableHeader columns={columns} />
                <tbody>
                    {departments.map((department) => (
                        <TableDepartmentRow
                            employee={employees.find((employee)=> employee.id === department.mgrEmpNo)}
                            key={department.id}
                            department={department}
                            onEdit={() => {
                                onEdit(department.id)
                                navigate(`/departments/${department.id}`)
                            }}
                            onDelete={() => onDelete(department.id)}
                            onDetail={() => {
                                navigate(`/departments/detail/${department.id}`)
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </>

    )

};

export default TableDepartments;

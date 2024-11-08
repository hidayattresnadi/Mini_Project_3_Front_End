import { useNavigate } from 'react-router-dom';
import TableEmployees from '../modules/tableEmployees';
import TableLayout from '../templates/TableLayout';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../elements/loading';

function EmployeesPage({ columns = { columns }, employees = { employees }, onEdit = { onEdit }, onDelete = { onDelete }, departments = {departments} }) {
    const navigate = useNavigate();
    const buttonTitle = 'Add Employee';
    const onClick = ()=>navigate('/employees/new')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
        {loading ? <LoadingSpinner/> : <TableLayout title="List of Employees" buttonTitle={buttonTitle} onClick={onClick} >
            <TableEmployees columns={columns} employees={employees} onEdit={onEdit} onDelete={onDelete} departments={departments} />
        </TableLayout> }
        </>
    )
}

export default EmployeesPage;
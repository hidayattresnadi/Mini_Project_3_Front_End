import { useNavigate } from 'react-router-dom';
import TableLayout from '../templates/TableLayout';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../elements/loading';
import TableDepartments from '../modules/tableDepartments';

function DepartmentsPage({ columns = { columns }, departments = { departments }, onEdit = { onEdit }, onDelete = { onDelete }, employees = {employees} }) {
    const navigate = useNavigate();
    const buttonTitle = 'Add Department';
    const onClick = ()=>navigate('/departments/new')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
        {loading ? <LoadingSpinner/> : <TableLayout title="List of Departments" buttonTitle={buttonTitle} onClick={onClick} >
            <TableDepartments columns={columns} departments={departments} onEdit={onEdit} onDelete={onDelete} employees={employees} />
        </TableLayout> }
        </>
    )
}

export default DepartmentsPage;
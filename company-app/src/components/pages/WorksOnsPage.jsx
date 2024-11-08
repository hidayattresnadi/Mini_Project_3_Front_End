import { useNavigate } from 'react-router-dom';
import TableLayout from '../templates/TableLayout';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../elements/loading';
import TableWorksOns from '../modules/tableWorksOns';

function WorksOnsPage({ columns = { columns }, worksOns = { worksOns },employees={employees}, projects={projects}, onEdit = { onEdit }, onDelete = { onDelete } }) {
    const navigate = useNavigate();
    const buttonTitle = 'Add WorksOn';
    const onClick = ()=>navigate('/assignments/new')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
        {loading ? <LoadingSpinner/> : <TableLayout title="List of WorksOns" buttonTitle={buttonTitle} onClick={onClick} >
            <TableWorksOns columns={columns} worksOns={worksOns} projects={projects} employees={employees} onEdit={onEdit} onDelete={onDelete} />
        </TableLayout> }
        </>
    )
}

export default WorksOnsPage;
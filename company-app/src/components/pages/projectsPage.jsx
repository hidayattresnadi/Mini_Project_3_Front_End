import { useNavigate } from 'react-router-dom';
import TableLayout from '../templates/TableLayout';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../elements/loading';
import TableProjects from '../modules/tableProjects';

function ProjectsPage({ columns = { columns }, projects = { projects }, departments = {departments}, onEdit = { onEdit }, onDelete = { onDelete } }) {
    const navigate = useNavigate();
    const buttonTitle = 'Add Project';
    const onClick = ()=>navigate('/projects/new')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
        {loading ? <LoadingSpinner/> : <TableLayout title="List of Projects" buttonTitle={buttonTitle} onClick={onClick} >
            <TableProjects columns={columns} projects={projects} departments={departments} onEdit={onEdit} onDelete={onDelete} />
        </TableLayout> }
        </>
    )
}

export default ProjectsPage;
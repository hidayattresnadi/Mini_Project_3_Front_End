import TableHeader from '../widgets/tableHeader';
import { useNavigate } from 'react-router-dom';
import TableProjectRow from '../widgets/tableProjectRow';


const TableProjects = ({ projects, departments, onEdit, onDelete, columns }) => {
    const navigate = useNavigate();
    return (
        <>
            <table className="table table-bordered text-center">
                <TableHeader columns={columns} />
                <tbody>
                    {projects.map((project) => (
                        <TableProjectRow
                            key={project.id}
                            project={project}
                            department={departments.find((department) => department.id === project.deptNo)}
                            onEdit={() => {
                                onEdit(project.id)
                                navigate(`/projects/${project.id}`)
                            }}
                            onDelete={() => onDelete(project.id)}
                            onDetail={() => {
                                navigate(`/projects/detail/${project.id}`)
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </>

    )

};

export default TableProjects;

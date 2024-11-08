import { useParams } from 'react-router-dom';
import DetailLayout from '../templates/detailLayout';
import ProjectDetailCard from '../modules/projectCard';
import WorksOnsPage from './WorksOnsPage';

function ProjectDetailPage({ projects, departments, worksOns, employees, columns, onEdit, onDelete }) {
    const { id } = useParams();
    const detailProject = projects.find((project)=>project.id == id);
    const detailDepartment = departments.find((department)=>department.id === detailProject.deptNo);
    const worksOnProjects = worksOns.filter((worksOn) => worksOn.projNo === id);
    return (
        <>
        <DetailLayout title={'Project Details'}>
            <ProjectDetailCard
            detailProject={detailProject}
            detailDepartment={detailDepartment}
        />
        </DetailLayout>
        <WorksOnsPage worksOns={worksOnProjects} projects={projects} employees={employees} columns={columns} onEdit={onEdit} onDelete={onDelete} />
        </>
        

    )
}

export default ProjectDetailPage;
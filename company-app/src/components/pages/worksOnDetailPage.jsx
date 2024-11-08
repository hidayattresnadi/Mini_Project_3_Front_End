import { useParams } from 'react-router-dom';
import DetailLayout from '../templates/detailLayout';
import WorksOnDetailCard from '../modules/worksOnCard';

function WorksOnDetailPage({ worksOns, employees, projects }) {
    const { empNo, projNo } = useParams();
    const detailWorksOn = worksOns.find((worksOn)=>worksOn.empNo === empNo && worksOn.projNo === projNo);
    const detailEmployee = employees.find((employee) => employee.id === empNo  )
    const detailProject = projects.find((project) => project.id === projNo)
    return (
        <DetailLayout title={'WorksOn Details'}>
            <WorksOnDetailCard
            detailWorksOn={detailWorksOn}
            detailEmployee={detailEmployee}
            detailProject={detailProject}
        />
        </DetailLayout>
    )
}

export default WorksOnDetailPage;
import TableHeader from '../widgets/tableHeader';
import { useNavigate } from 'react-router-dom';
import TableWorksOnRow from '../widgets/tableWorksOnRow';


const TableWorksOns = ({ worksOns, projects, employees, onEdit, onDelete, columns }) => {
    const navigate = useNavigate();
    const detailProject = (projNo) => projects.find((project) => project.id === projNo);
    const detailEmployee = (empNo) => employees.find((employee) => employee.id === empNo);
    return (
        <>
            <table className="table table-bordered text-center">
                <TableHeader columns={columns} />
                <tbody>
                    {worksOns.map((worksOn) => (
                        <TableWorksOnRow
                            key={worksOn.id}
                            worksOn={worksOn}
                            detailEmployee={detailEmployee(worksOn.empNo)}
                            detailProject={detailProject(worksOn.projNo)}
                            onEdit={() => {
                                onEdit(worksOn.id)
                                navigate(`/assignments/${worksOn.id}`)
                            }}
                            onDelete={() => onDelete(worksOn.id)}
                            onDetail={() => {
                                navigate(`/assignments/${worksOn.empNo}/${worksOn.projNo}`)
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </>

    )

};

export default TableWorksOns;

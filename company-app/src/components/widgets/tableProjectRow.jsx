import TableCell from '../elements/tableCell';
import Button from '../elements/button';
import Icon from '../elements/icon';

const TableProjectRow = ({ project, department, onEdit, onDelete, onDetail }) => (
    <tr>
        <TableCell>{project.id}</TableCell>
        <TableCell>{project.projName}</TableCell>
        <TableCell>{department ? department.deptName : 'Not Available'}</TableCell>
        <TableCell>
            <Button onClick={onEdit} className="btn btn-primary" ariaLabel="Edit Project">
                <Icon className="fas fa-pencil-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDelete} className="btn btn-danger" ariaLabel="Delete Project">
                <Icon className="fas fa-trash-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDetail} className="btn btn-primary" aria-label="Detail Project">
                <Icon className="fas fa-eye" />
            </Button>
        </TableCell>
    </tr>
);

export default TableProjectRow;
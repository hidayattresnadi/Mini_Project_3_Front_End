import TableCell from '../elements/tableCell';
import Button from '../elements/button';
import Icon from '../elements/icon';

const TableEmployeeRow = ({ employee, department, onEdit, onDelete, onDetail }) => (
    <tr>
        <TableCell>{employee.id}</TableCell>
        <TableCell>{employee.fName}</TableCell>
        <TableCell>{employee.lName}</TableCell>
        <TableCell>{employee.position}</TableCell>
        <TableCell>{department ? department.deptName :'Not Available'}</TableCell>
        <TableCell>
            <Button onClick={onEdit} className="btn btn-primary" ariaLabel="Edit Employee">
                <Icon className="fas fa-pencil-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDelete} className="btn btn-danger" ariaLabel="Delete Employee">
                <Icon className="fas fa-trash-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDetail} className="btn btn-primary" aria-label="Detail Employee">
                <Icon className="fas fa-eye" />
            </Button>
        </TableCell>
    </tr>
);

export default TableEmployeeRow;
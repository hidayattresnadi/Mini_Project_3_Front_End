import TableCell from '../elements/tableCell';
import Button from '../elements/button';
import Icon from '../elements/icon';

const TableDepartmentRow = ({ department, onEdit, onDelete, onDetail, employee }) => (
    <tr>
        <TableCell>{department.id}</TableCell>
        <TableCell>{department.deptName}</TableCell>
        <TableCell>{`${employee.fName} ${employee.lName}`}</TableCell>
        <TableCell>
            <Button onClick={onEdit} className="btn btn-primary" ariaLabel="Edit Department">
                <Icon className="fas fa-pencil-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDelete} className="btn btn-danger" ariaLabel="Delete Department">
                <Icon className="fas fa-trash-alt" />
            </Button>
        </TableCell>
        <TableCell>
            <Button onClick={onDetail} className="btn btn-primary" aria-label="Detail Department">
                <Icon className="fas fa-eye" />
            </Button>
        </TableCell>
    </tr>
);

export default TableDepartmentRow;
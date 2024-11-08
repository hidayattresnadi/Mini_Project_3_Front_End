import DepartmentForm from '../modules/departmentForm';
import FormLayout from '../templates/FormLayout';

function DepartmentFormPage({ addDepartment, updateDepartment, editingDepartment,employees, errors }) {
    return (
        <FormLayout title={editingDepartment ? "Form to Update Department" : "Form to Add Department"}>
            <DepartmentForm
                employees={employees}
                addDepartment={addDepartment}
                updateDepartment={updateDepartment}
                editingDepartment={editingDepartment}
                errors={errors}
            />
        </FormLayout>
    )
}

export default DepartmentFormPage;
import EmployeeForm from '../modules/employeeForm'
import FormLayout from '../templates/FormLayout';

function EmployeeFormPage({ addEmployee, updateEmployee, editingEmployee,departments, errors }) {
    return (
        <FormLayout title={editingEmployee ? "Form to Update Employee" : "Form to Add Employee"}>
            <EmployeeForm 
                addEmployee={addEmployee}
                departments={departments} 
                updateEmployee={updateEmployee} 
                editingEmployee={editingEmployee}  
                errors={errors} 
            />
        </FormLayout>
    )
}

export default EmployeeFormPage;
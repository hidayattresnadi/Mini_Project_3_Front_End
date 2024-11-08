import WorksOnForm from '../modules/worksOnForm';
import FormLayout from '../templates/FormLayout';

function WorksOnFormPage({ addWorksOn, employees, projects, updateWorksOn, editingWorksOn, errors }) {
    return (
        <FormLayout title={editingWorksOn ? "Form to Update Works On" : "Form to Add Works On"}>
            <WorksOnForm 
                addWorksOn={addWorksOn}
                employees={employees}
                projects={projects} 
                updateWorksOn={updateWorksOn} 
                editingWorksOn={editingWorksOn}  
                errors={errors} 
            />
        </FormLayout>
    )
}

export default WorksOnFormPage;
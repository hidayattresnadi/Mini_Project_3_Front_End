import ProjectForm from '../modules/projectForm';
import FormLayout from '../templates/FormLayout';

function ProjectFormPage({ addProject, departments, updateProject, editingProject, errors }) {
    return (
        <FormLayout title={editingProject ? "Form to Update Project" : "Form to Add Project"}>
            <ProjectForm 
                addProject={addProject}
                departments={departments}  
                updateProject={updateProject} 
                editingProject={editingProject}  
                errors={errors} 
            />
        </FormLayout>
    )
}

export default ProjectFormPage;
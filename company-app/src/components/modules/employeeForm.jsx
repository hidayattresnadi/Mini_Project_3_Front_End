import { useState, useEffect } from 'react';
import InputField from '../widgets/inputField';
import Button from '../elements/button';
import { useNavigate } from 'react-router-dom';
import RadioGroup from './radioGroup';
import LabeledTextArea from '../widgets/labeledTextArea';
import SelectField from '../widgets/selectField';

const EmployeeForm = ({ addEmployee, updateEmployee, editingEmployee, departments, errors }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        sex: '',
        address: '',
        dob: '',
        position: '',
        deptNo: ''
    });

    useEffect(() => {
        if (editingEmployee) {
            setFormData({
                fName: editingEmployee.fName,
                lName: editingEmployee.lName,
                sex: editingEmployee.sex,
                address: editingEmployee.address,
                dob: editingEmployee.dob,
                position: editingEmployee.position,
                deptNo: editingEmployee.deptNo
            });
        } else {
            setFormData({
                fName: '',
                lName: '',
                sex: '',
                address: '',
                dob: '',
                position: '',
                deptNo: ''
            });
        }
    }, [editingEmployee]);

    const handleInputChange = (e) => {
        const { id, name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [type === "radio" ? name : id]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingEmployee) {
            const result = updateEmployee(formData);
            if (Object.keys(result).length === 0) {
                navigate('/employees');
                setFormData({
                    fName: '',
                    lName: '',
                    sex: '',
                    address: '',
                    dob: '',
                    position: '',
                    deptNo: ''
                });
            }
        } else {
            const result = addEmployee(formData);
            if (Object.keys(result).length === 0) {
                navigate('/employees');
                setFormData({
                    fName: '',
                    lName: '',
                    sex: '',
                    address: '',
                    dob: '',
                    position: '',
                    deptNo: ''
                });
            }
        }
    };
    console.log(departments);

    const options = [
        { label: "Female", value: "Female" },
        { label: "Male", value: "Male" }
    ];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="First Name"
                    type="text"
                    id="fName"
                    value={formData.fName}
                    onChange={handleInputChange}
                />
                {errors?.fName ? <h6 className='text-start'>{errors.fName}</h6> : ''}
                <InputField
                    label="Last Name"
                    type="text"
                    id="lName"
                    value={formData.lName}
                    onChange={handleInputChange}
                />
                {errors?.lName ? <h6 className='text-start'>{errors.lName}</h6> : ''}
                <InputField
                    label="Date of Birth"
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                />
                {errors?.dob ? <h6 className='text-start'>{errors.dob}</h6> : ''}
                <LabeledTextArea
                    label="Address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                />
                {errors?.address ? <h6 className='text-start'>{errors.address}</h6> : ''}
                <InputField
                    label="Position"
                    type="text"
                    id="position"
                    value={formData.position}
                    onChange={handleInputChange}
                />
                {errors?.position ? <h6 style={{ marginBottom: '50px' }} className='text-start'>{errors.position}</h6> : ''}
                <SelectField
                    label="Select Department"
                    id="deptNo"
                    options={departments}
                    value={formData.deptNo}
                    labelKey={ ["deptName"]}
                    valueKey={'id'}
                    optionTitle={'Choose Department'}
                    onChange={(e) => handleInputChange(e,'deptNo')}
                    className="form-select"
                />
                {errors?.deptNo ? <h6 style={{ marginBottom: '50px' }} className='text-start'>{errors.deptNo}</h6> : ''}
                <RadioGroup
                    options={options}
                    name="sex"
                    selectedValue={formData.sex}
                    onChange={handleInputChange}
                />
                {errors?.sex ? <h6 className='text-start'>{errors.sex}</h6> : ''}
                <Button type="submit" className="btn btn-primary mt-3 w-100">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default EmployeeForm;

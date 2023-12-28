import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { Employees } from '~/utils/request';
import styles from './UpdateEmploy.module.scss';

const cx = classNames.bind(styles);

const UpdateEmploy = () => {
    const { employeeId } = useParams();
    const [employee, setEmployee] = useState({
        id: employeeId,
        name: '',
        gender: '',
        address: '',
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const response = await Employees.get(`/details/${employeeId}`);
                if (response.status === 200) {
                    const fetchedEmployee = response.data;
                    setEmployee({
                        id: fetchedEmployee.id,
                        name: fetchedEmployee.name,
                        gender: fetchedEmployee.gender,
                        address: fetchedEmployee.address,
                    });
                }
            } catch (error) {
                setErrorMessages(['Failed to fetch employee details']);
            }
        };

        fetchEmployeeDetails();
    }, [employeeId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Employees.put('/update', employee);
            if (response.status === 200) {
                setSuccessMessage(response.data);
                setErrorMessages([]);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessages(error.response.data);
            } else {
                setErrorMessages(['Something went wrong. Please try again.']);
            }
            setSuccessMessage('');
        }
    };

    return (
        <div className={cx('wrapper_form')}>
            <Link to="/employee">
                <button className={cx('back_btn')}>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
            </Link>
            <div className={cx('form_update')}>
                <h2>Update Employee</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="text" name="gender" value={employee.gender} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={employee.address} onChange={handleInputChange} />
                    </div>
                    <button className={cx('login_btn')} type="submit">
                        Update Employee
                    </button>
                </form>
            </div>

            {errorMessages.length > 0 && (
                <div className="error-messages">
                    <ul>
                        {errorMessages.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default UpdateEmploy;

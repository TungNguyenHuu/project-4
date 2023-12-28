import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

import { Employees } from '~/utils/request';
import styles from './AddEmployee.module.scss';

const cx = classNames.bind(styles);

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        gender: '',
        address: '',
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Employees.post('/add', employee);
            if (response.status === 200) {
                setSuccessMessage(response.data);
                setErrorMessages([]);
                // Clear form after successful addition
                setEmployee({
                    name: '',
                    gender: '',
                    address: '',
                });
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
            <div className={cx('form_add')}>
                <h2>Add Employee</h2>
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
                        Add Employee
                    </button>
                </form>

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
        </div>
    );
};

export default AddEmployee;

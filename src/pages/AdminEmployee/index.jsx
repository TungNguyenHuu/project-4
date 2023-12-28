import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Employees } from '~/utils/request';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminEmployee.module.scss';

const cx = classNames.bind(styles);

function AdminEmployee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        Employees.get('/list')
            .then((res) => {
                setEmployees(res.data);
            })
            .catch(() => {
                console.log('error');
            });
    }, [employees]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Employee Manager</h3>
                    <div className={cx('add_employee')}>
                        <Link to="/addemployee">
                            <button className={cx('add_employee_btn')}>Invite Employee</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Gender</td>
                                <td>Address</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.address}</td>
                                        <td>
                                            <button>
                                                <Link to={`/updateEmploy/${employee.id}`}>
                                                    <FontAwesomeIcon className={cx('edit_icon')} icon={faPenToSquare} />
                                                </Link>
                                            </button>
                                            <button>
                                                <FontAwesomeIcon className={cx('delete_icon')} icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AdminEmployee;

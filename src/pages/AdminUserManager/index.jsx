import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Users } from '~/utils/request';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminUserManager.module.scss';

const cx = classNames.bind(styles);

function AdminUserManager() {
    const [users, setUsers] = useState([]);
    // const storedToken = localStorage.getItem('token');

    useEffect(() => {
        // if (storedToken) {
        Users.get('/admin/list')
            .then((res) => {
                setUsers(res.data);
            })
            .catch(() => {
                console.log('error');
            });
        // }
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>User Manager</h3>
                    <div className={cx('add_user')}>
                        <Link to="/adduser">
                            <button className={cx('add_user_btn')}>Invite User</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                {/* <td>EmployeeID</td> */}
                                <td>Username</td>
                                <td>Email</td>
                                <td>BirthDay</td>
                                <td>Nickname</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        {/* <td></td> */}
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.birthday}</td>
                                        <td>{user.nickname}</td>
                                        <td>
                                            <button>
                                                <Link to={`/updateuser/${user.username}`}>
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

export default AdminUserManager;

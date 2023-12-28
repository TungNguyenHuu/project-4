import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { axiosLogin } from '~/utils/request';
import styles from './AddUser.module.scss';

const cx = classNames.bind(styles);

function AddUser() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        birthday: '',
        nickname: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosLogin.post('/admin/createuser', user);

            if (response.status === 201) {
                // Xử lý đăng ký thành công
                console.log('Đăng ký thành công');
            }
        } catch (error) {
            setErrorMessage(error.response.data);
        }
    };

    return (
        <>
            <div className={cx('wrapper_form')}>
                <Link to="/usermanager">
                    <button className={cx('back_btn')}>
                        <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                </Link>
                <div className={cx('form_add')}>
                    <h2>Add User</h2>
                    <form className={cx('form')} onSubmit={handleRegister}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Birthday: </label>
                            <input
                                type="date"
                                name="birthday"
                                value={user.birthday}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Nickname:</label>
                            <input type="text" name="nickname" value={user.nickname} onChange={handleInputChange} />
                        </div>
                        <button className={cx('login_btn')} type="submit">
                            Submit
                        </button>
                    </form>
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
            </div>
        </>
    );
}

export default AddUser;

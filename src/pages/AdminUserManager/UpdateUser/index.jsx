import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { Users } from '~/utils/request';
import styles from './UpdateUser.module.scss';

const cx = classNames.bind(styles);

function UpdateUser() {
    const { username } = useParams();
    const [user, setUser] = useState({
        id: '',
        username: '',
        password: '',
        email: '',
        birthday: '',
        nickname: '',
        confirmPassword: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Users.get(`/findByUsername?username=${username}`);
                setUser(response.data); // Assuming the response data is the user object
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [username]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const updateUser = async () => {
        if (user.confirmPassword !== user.password) {
            alert('Password confirmation does not match');
            return;
        }

        try {
            const userDTO = {
                user: {
                    id: user.id,
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    birthday: user.birthday,
                    nickname: user.nickname,
                },
                confirmPassword: user.confirmPassword,
            };

            const response = await Users.put(`/update`, userDTO);
            if (response.status === 201) {
                alert('User updated successfully');
                // Handle success scenario
            } else {
                alert('Failed to update user');
                // Handle failure scenario
            }
        } catch (error) {
            alert('Error updating user: ' + error.message);
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
                    <h2>Update User</h2>
                    <form className={cx('form')}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                                // required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                // required
                            />
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleInputChange}
                                // required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                // required
                            />
                        </div>
                        <div>
                            <label>Birthday: </label>
                            <input
                                type="date"
                                name="birthday"
                                value={user.birthday}
                                onChange={handleInputChange}
                                // required
                            />
                        </div>
                        <div>
                            <label>Nickname:</label>
                            <input type="text" name="nickname" value={user.nickname} onChange={handleInputChange} />
                        </div>
                        <button className={cx('login_btn')} type="button" onClick={updateUser}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateUser;

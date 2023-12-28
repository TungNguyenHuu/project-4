import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import { axiosLogin } from '~/utils/request';

const cx = classNames.bind(styles);

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        birthday: '',
        nickname: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosLogin.post('/register', formData);
            if (response.status === 200) {
                setSuccessMessage(response.data);
                setError(null);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('An error occurred. Please try again.');
            }
            setSuccessMessage(null);
        }
    };

    return (
        <div className={cx('app-container')}>
            <div className={cx('wrapper')}>
                <div className={cx('full-screen')} />
                <div className={cx('header-navbar')}>
                    <Link to="/">
                        <div className={cx('logo')}>
                            <img src={images.logo} alt="logo" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('left_image')}>
                        <img src={images.login_img} alt="image" />
                    </div>
                    <div className={cx('right_form')}>
                        <div className={cx('login_form')}>
                            <p className={cx('title')}>Sign Up</p>

                            {/* Form */}
                            {error && <p>Error: {error}</p>}
                            {successMessage && <p>{successMessage}</p>}
                            <form className={cx('form')} onSubmit={handleSubmit}>
                                <div>
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Birthday: </label>
                                    <input
                                        type="date"
                                        name="birthday"
                                        value={formData.birthday}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Nickname:</label>
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={formData.nickname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className={cx('login_btn')} type="submit">
                                    Sign Up
                                </button>
                            </form>

                            <div className={cx('signin_link')}>
                                <span>
                                    You have an account?{' '}
                                    <Link to="/login">
                                        <button className={cx('signin_link_btn')}>Sign In</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

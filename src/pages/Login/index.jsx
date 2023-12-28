import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '~/utils/AuthContext';
import { axiosLogin } from '~/utils/request';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    const { setIsLoggedIn, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosLogin.post('/login', {
                username: username,
                password: password,
            });

            if (response.status === 200) {
                const { token } = response.data; // userData có thể chứa thông tin về người dùng từ server
                localStorage.setItem('token', token);
                setIsLoggedIn(true);
                navigate('/');
            } else {
                console.error('Login failed:', response.data);
            }

            console.log('Đăng nhập thành công!', response.data);
        } catch (error) {
            setError('Đăng nhập không thành công. Vui lòng thử lại!');
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
                            <p className={cx('title')}>Sign In</p>
                            {/* Form */}
                            <form className={cx('form')} onSubmit={handleLogin}>
                                <div>
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        spellCheck={false}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        spellCheck={false}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className={cx('login_btn')} type="submit">
                                    Sign In
                                </button>
                            </form>

                            <Link to="">
                                <div className={cx('password_forgot')}>Forgot password?</div>
                            </Link>
                            <div className={cx('signup_link')}>
                                <span>
                                    Don't have an account?{' '}
                                    <Link to="/register">
                                        <button className={cx('signup_link_btn')}>Sign up</button>
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

export default Login;

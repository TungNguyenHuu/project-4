import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { AuthContext } from '~/utils/AuthContext';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const CATEGORY_ITEMS = [
    {
        title: 'Humorous',
        to: '/catedetail',
    },
    {
        title: 'Horrified',
        to: '/catedetail',
    },
    {
        title: 'Fiction',
        to: '/catedetail',
    },
    {
        title: 'Folk',
        to: '/catedetail',
    },
    {
        title: 'Love language',
        to: '/catedetail',
    },
    {
        title: 'Thrilling',
        to: '/catedetail',
    },
    {
        title: 'Completed',
        to: '/catedetail',
    },
    {
        title: 'Adventure',
        to: '/catedetail',
    },
    {
        title: 'Fighting',
        to: '/catedetail',
    },
    {
        title: 'Castles',
        to: '/catedetail',
    },
    {
        title: 'Forbidden',
        to: '/catedetail',
    },
    {
        title: 'Babydaddy',
        to: '/catedetail',
    },
];

function Header() {
    const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Xóa token từ localStorage
        setIsLoggedIn(false); // Đặt lại trạng thái đăng nhập về false
        setUserData(null); // Đặt lại thông tin người dùng về null hoặc giá trị mặc định
        navigate('/login');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                </Link>
                <div className={cx('category')}>
                    <Menu items={CATEGORY_ITEMS}>
                        <button className={cx('category_btn')}>Category</button>
                    </Menu>
                </div>

                {/* Hot story */}
                <Link to="/hotstory">
                    <div className={cx('hot_story')}>Hot Story</div>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {isLoggedIn && (
                        <Link to="/upload">
                            <div className={cx('upload_story')}>Upload Story</div>
                        </Link>
                    )}

                    {isLoggedIn ? (
                        <div>
                            <button className={cx('logout_btn')} onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className={cx('auth')}>
                            <Link to="/login">
                                <div className={cx('signIn_btn')}>Sign In</div>
                            </Link>
                            <Link to="/register">
                                <div className={cx('signUp_btn')}>Sign Up</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;

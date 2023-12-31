import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Genres } from '~/utils/request';
import { AuthContext } from '~/utils/AuthContext';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [genres, setGenres] = useState([]);
    const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    //Get Genres
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Genres.get('/list');
                const slicedData = response.data.slice(0, 16);
                setGenres(slicedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    //Logout
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
                    <Menu items={genres}>
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

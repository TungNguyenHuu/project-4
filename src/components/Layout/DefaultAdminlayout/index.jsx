import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faUser, faLayerGroup, faBook } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './DefaultAdminLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultAdminLayout(props) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header_title')}>
                        <h2>PERMISSION MANAGER</h2>
                    </div>
                    <Link to="/">
                        <button className={cx('home_back_btn')}>
                            <FontAwesomeIcon className={cx('back_icon')} icon={faRotateLeft} />
                            <span>Website</span>
                        </button>
                    </Link>
                </div>
                <div className={cx('container')}>
                    <div className={cx('sidebar')}>
                        <ul className={cx('menu_list')}>
                            <Link to="user-manager">
                                <li className={cx('list_item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <span>User</span>
                                </li>
                            </Link>
                            <Link to="employee">
                                <li className={cx('list_item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <span>Employee</span>
                                </li>
                            </Link>
                            <Link to="genres">
                                <li className={cx('list_item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faLayerGroup} />
                                    <span>Genres</span>
                                </li>
                            </Link>
                            <Link to="story">
                                <li className={cx('list_item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faBook} />
                                    <span>Story</span>
                                </li>
                            </Link>
                            <Link to="author">
                                <li className={cx('list_item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <span>Author</span>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className={cx('content')}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DefaultAdminLayout;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './UserHistory.module.scss';

const cx = classNames.bind(styles);

function UserHistory() {
    return (
        <>
            <div className={cx('wrapper_history')}>
                <div className={cx('title')}>
                    <h3>My Stories</h3>
                    <div className={cx('new_story')}>
                        <Link to="/upload">
                            <button>+ New story</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('container_main')}>
                    <div className={cx('container')}>
                        {/* Khi chưa có story nào */}
                        {/* <div className={cx('blank_history')}>
                            <div className={cx('history_icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faRectangleList} />
                            </div>
                            <div className={cx('greeting')}>
                                <p>Hi, Tung Nguyen Huu! You haven't written any stories yet.</p>
                            </div>
                            <div className={cx('create_story')}>
                                <Link to="/upload">
                                    <button>+ Create a story</button>
                                </Link>
                            </div>
                        </div> */}

                        {/* Khi đã có story */}
                        <div className={cx('history')}>
                            <div className={cx('select')}>
                                <button>All Stories</button>
                            </div>
                            <div className={cx('history_list')}>
                                <ul>
                                    <li className={cx('item')}>
                                        <div className={cx('cover')}>
                                            <img src="https://img.wattpad.com/cover/228826651-100-k534671.jpg" />
                                        </div>
                                        <div className={cx('content')}>
                                            <h4>GentleMen</h4>
                                            <p className={cx('description')}>
                                                Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
                                                3:Friend or Enemy(chp171-200)
                                            </p>
                                            <p className={cx('updated')}>2 days ago</p>
                                        </div>
                                        <div className={cx('delete_icon')}>
                                            <FontAwesomeIcon className={cx('icon_trash')} icon={faTrash} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Banner */}
                    <div className={cx('banner')}>
                        <img src="https://aptech-ng.com/careerquest2023/images/metabanner.jpg?ver=1.1" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHistory;

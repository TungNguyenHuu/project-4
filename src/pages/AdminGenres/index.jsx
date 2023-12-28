import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Genres } from '~/utils/request';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminGenres.module.scss';

const cx = classNames.bind(styles);

function AdminGenres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        Genres.get('/list')
            .then((res) => {
                setGenres(res.data);
            })
            .catch(() => {
                console.log('error');
            });
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Genres Manager</h3>
                    <div className={cx('add_cate')}>
                        <Link to="/addgenres">
                            <button className={cx('add_cate_btn')}>Invite Genres</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>CategoryName</td>
                                <td>Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {genres.map((cate) => {
                                return (
                                    <tr key={cate.id}>
                                        <td>{cate.id}</td>
                                        <td>{cate.name}</td>
                                        <td>{cate.description}</td>
                                        <td>
                                            <button>
                                                <FontAwesomeIcon className={cx('edit_icon')} icon={faPenToSquare} />
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

export default AdminGenres;

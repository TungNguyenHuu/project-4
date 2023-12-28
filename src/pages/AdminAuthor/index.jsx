import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Authors } from '~/utils/request';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminAuthor.module.scss';

const cx = classNames.bind(styles);

function AdminAuthor() {
    const [authors, setAuthors] = useState([]);
    // const storedToken = localStorage.getItem('token');

    useEffect(() => {
        // if (storedToken) {
        Authors.get('/list')
            .then((res) => {
                setAuthors(res.data);
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
                    <h3>Author Manager</h3>
                    <div className={cx('add_author')}>
                        <Link to="/addAuthor">
                            <button className={cx('add_author_btn')}>Invite Author</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Information</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author) => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.id}</td>
                                        <td>{author.name}</td>
                                        <td>{author.email}</td>
                                        <td>{author.information}</td>
                                        <td>
                                            <button>
                                                <Link to="">
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

export default AdminAuthor;

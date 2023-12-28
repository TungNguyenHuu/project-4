import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { Authors } from '~/utils/request';
import styles from './AddAuthor.module.scss';

const cx = classNames.bind(styles);

function AddAuthor() {
    const [authors, setAuthors] = useState({
        name: '',
        email: '',
        information: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAuthors({ ...authors, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await Authors.post('/add', authors);

            if (response.status === 201) {
                console.log('initialization successful');
            }
        } catch (error) {
            setErrorMessage(error.response.data);
        }
    };

    return (
        <>
            <div className={cx('wrapper_form')}>
                <Link to="/author">
                    <button className={cx('back_btn')}>
                        <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                </Link>
                <div className={cx('form_add')}>
                    <h2>Add Author</h2>
                    <form className={cx('form')} onSubmit={handleRegister}>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={authors.name} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={authors.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Information:</label>
                            <input
                                type="text"
                                name="information"
                                value={authors.information}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button className={cx('login_btn')} type="submit">
                            Add Author
                        </button>
                    </form>
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
            </div>
        </>
    );
}

export default AddAuthor;

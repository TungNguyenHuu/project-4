import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

import { Genres } from '~/utils/request';
import styles from './AddGenres.module.scss';

const cx = classNames.bind(styles);

function AddGenres() {
    const [genres, setGenres] = useState({
        name: '',
        description: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGenres({ ...genres, [name]: value });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await Genres.post('/create', genres);

            if (response.status === 201) {
                console.log('Initialization successful');
            }
        } catch (error) {
            setErrorMessage(error.response.data);
        }
    };

    return (
        <>
            <div className={cx('wrapper_form')}>
                <Link to="/genres">
                    <button className={cx('back_btn')}>
                        <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                </Link>
                <div className={cx('form_add')}>
                    <h2>Add Genres</h2>
                    <form className={cx('form')} onSubmit={handleForm}>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={genres.name} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                value={genres.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button className={cx('submit_btn')} type="submit">
                            Submit
                        </button>
                    </form>
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
            </div>
        </>
    );
}

export default AddGenres;

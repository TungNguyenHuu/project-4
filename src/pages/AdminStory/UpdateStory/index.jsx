import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import { Stories } from '~/utils/request';

import styles from './UpdateStory.module.scss';

const cx = classNames.bind(styles);

const UpdateStory = () => {
    const { id } = useParams();
    const [story, setStory] = useState({
        storyId: id,
        title: '',
        description: '',
        process: false,
        datePost: '',
        genresName: [],
        authorName: [],
        image: null,
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchStoryDetails = async () => {
            try {
                const response = await Stories.get(`/${id}`);
                if (response.status === 200) {
                    const fetchedStory = response.data;
                    setStory({
                        storyId: fetchedStory.storyId,
                        title: fetchedStory.title,
                        description: fetchedStory.description,
                        process: fetchedStory.process,
                        datePost: fetchedStory.datePost,
                        genresName: fetchedStory.genresName,
                        authorName: fetchedStory.authorName,
                        image: null,
                    });
                }
            } catch (error) {
                setErrorMessages(['Failed to fetch story details']);
            }
        };

        fetchStoryDetails();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStory({ ...story, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setStory({ ...story, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('storyId', story.storyId);
            formData.append('title', story.title);
            formData.append('description', story.description);
            formData.append('process', story.process);
            formData.append('datePost', story.datePost);
            formData.append('image', story.image);
            formData.append('genresName', JSON.stringify(story.genresName));
            formData.append('authorName', JSON.stringify(story.authorName));

            const response = await Stories.put('/updateByAdmin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setSuccessMessage(response.data);
                setErrorMessages([]);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessages(error.response.data);
            } else {
                setErrorMessages(['Something went wrong. Please try again.']);
            }
            setSuccessMessage('');
        }
    };

    return (
        <div className={cx('wrapper_form')}>
            <Link to="/story">
                <button className={cx('back_btn')}>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
            </Link>
            <div className={cx('form_add')}>
                <h2>Update Story</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={story.title} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" name="content" value={story.content} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea name="description" value={story.description} onChange={handleInputChange}></textarea>
                    </div>
                    <div>
                        <label>Process: </label>
                        <input
                            type="checkbox"
                            name="process"
                            checked={story.process}
                            onChange={(e) => setStory({ ...story, process: e.target.checked })}
                        />
                    </div>
                    <div>
                        <label>Date Post: </label>
                        <input type="date" name="datePost" value={story.datePost} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Genres Name:</label>
                        <input
                            type="text"
                            name="genresName"
                            value={story.genresName}
                            onChange={(e) => setStory({ ...story, genresName: e.target.value.split(',') })}
                        />
                    </div>
                    <div>
                        <label>Author Name:</label>
                        <input
                            type="text"
                            name="authorName"
                            value={story.authorName}
                            onChange={(e) => setStory({ ...story, authorName: e.target.value.split(',') })}
                        />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="file" name="image" onChange={handleFileChange} />
                    </div>
                    <button className={cx('submit_btn')} type="submit">
                        Update Story
                    </button>
                </form>
            </div>

            {/* Error and success messages */}
            {errorMessages.length > 0 && (
                <div className="error-messages">
                    <ul>
                        {errorMessages.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default UpdateStory;

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Stories } from '~/utils/request';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminStory.module.scss';

const cx = classNames.bind(styles);

function AdminStory() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        Stories.get('/admin/list')
            .then((res) => {
                setStories(res.data);
            })
            .catch(() => {
                console.log('error');
            });
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Story Manager</h3>
                    <div className={cx('add_story')}>
                        <Link to="/addstory">
                            <button className={cx('add_story_btn')}>Invite Story</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                {/* <td>Process</td>
                                <td>Status</td> */}
                                <td>Description</td>
                                <td>Image</td>
                                <td>DatePost</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {stories.map((story) => {
                                return (
                                    <tr key={story.id}>
                                        <td>{story.id}</td>
                                        <td>{story.title}</td>
                                        {/* <td>{story.process}</td>
                                        <td>{story.status}</td> */}
                                        <td>{story.description}</td>
                                        <td className={cx('stories_img')}>
                                            <img
                                                src={`http://localhost:8080/api/v1/stories/${story.id}/image`}
                                                alt={`Story ${story.id}`}
                                            />
                                        </td>
                                        <td>{story.datepost}</td>
                                        <td>
                                            <button>
                                                <Link to={`/updatestory/${story.id}`}>
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

export default AdminStory;

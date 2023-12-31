import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Stories } from '~/utils/request';

import styles from './HotStory.module.scss';

const cx = classNames.bind(styles);

function HotStory() {
    const [hotStories, setHotStories] = useState([]);
    const [stories, setStories] = useState([]);

    //Hot stories of the month
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Stories.get('/public/list');
                const slicedData = response.data.slice(0, 7);
                setHotStories(slicedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Stories.get('/public/list');
                const slicedStories = response.data.slice(8, 18);
                setStories(slicedStories);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container_main')}>
                    <div className={cx('container')}>
                        <div className={cx('title')}>
                            <h2>HOT STORIES</h2>
                        </div>
                        <div className={cx('title_detail')}>
                            <h4>Featured stories of the month</h4>
                            <p>Read the stories we love</p>
                        </div>
                        <div className={cx('hot_list')}>
                            <ul className={cx('list')}>
                                {hotStories.map((story) => {
                                    return (
                                        <li key={story.id} className={cx('list_item')}>
                                            <div className={cx('cover')}>
                                                <Link to={`/storydetail/${story.id}`}>
                                                    <img
                                                        src={`http://localhost:8080/api/v1/stories/public/${story.id}/image`}
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            {/* <div className={cx('tag')}>
                                                <a className={cx('tag_item')} href="">
                                                    {story.genres}
                                                </a>
                                            </div> */}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={cx('wrapper_story')}>
                                {stories.map((item) => {
                                    return (
                                        <div key={item.id} className={cx('story_item')}>
                                            <div className={cx('story_image')}>
                                                <Link to={`/storydetail/${item.id}`}>
                                                    <img
                                                        src={`http://localhost:8080/api/v1/stories/public/${item.id}/image`}
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('content')}>
                                                <div className={cx('story_title')}>{item.title}</div>
                                                <div className={cx('description')}>{item.description}</div>
                                                {/* <div className={cx('tag')}>
                                                    <a className={cx('tag_item')} href="">
                                                        {item.tag}
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner')}>
                        <img src="https://c.pxhere.com/photos/d6/3a/magazine_store_rack_creative_text-55492.jpg!d" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotStory;

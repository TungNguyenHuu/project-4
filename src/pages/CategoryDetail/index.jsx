import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Genres } from '~/utils/request';

import styles from './CategoryDetail.scss';

const cx = classNames.bind(styles);

function CategoryDetail() {
    const { genresId } = useParams();
    const [genres, setGenres] = useState([]);
    const [storiesBygenresId, setStoriesBygenresId] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Genres.get(`/public/${genresId}/listStory`);
                setStoriesBygenresId(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [genresId]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container_main')}>
                <div className={cx('container')}>
                    <div className={cx('title')}>
                        <h2>Category</h2>
                    </div>
                    <div className={cx('tags_container')}>
                        <div className={cx('tag_title')}>Refind by tag:</div>
                        <div className={cx('wrapper_tags')}>
                            <div className={cx('tags_carousel')}>
                                <div className={cx('tag_items')}>
                                    {genres.map((genre) => {
                                        return (
                                            <Link to={`/catedetail/${genre.id}`}>
                                                <div key={genre.id} className={cx('tag_item')}>
                                                    {genre.name}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper_story')}>
                        {storiesBygenresId.map((item) => {
                            return (
                                <div key={item.id} className={cx('story_item')}>
                                    <div className={cx('story_image')}>
                                        <Link to={`/storydetail/${item.id}`}>
                                            <img
                                                src={`http://localhost:8080/api/v1/stories/public/${item.id}/image`}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className={cx('content')}>
                                        <div className={cx('story_title')}>{item.title}</div>
                                        <div className={cx('description')}>{item.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('banner')}>
                    <img src="https://c.pxhere.com/photos/d6/3a/magazine_store_rack_creative_text-55492.jpg!d" />
                </div>
            </div>
        </div>
    );
}

export default CategoryDetail;

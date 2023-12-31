import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Stories, Comments } from '~/utils/request';
import styles from './StoryDetail.scss';

const cx = classNames.bind(styles);

function StoryDetail() {
    const { storyId } = useParams();
    const [storiesDetail, setStoriesDetail] = useState(null);
    const [commentsByStoryId, setCommentsByStoryId] = useState([]);
    const [stories, setStories] = useState([]);

    //Get StorybyId
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Stories.get(`/public/${storyId}/details`);
                setStoriesDetail(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [storyId]);

    //Get CommentsbyStoryId
    useEffect(() => {
        if (storiesDetail && storiesDetail.id) {
            const fetchComments = async () => {
                try {
                    const response = await Comments.get(`/public/${storiesDetail.id}/comment`);
                    setCommentsByStoryId(response.data);
                } catch (error) {
                    console.error('Error fetching comments: ', error);
                }
            };

            fetchComments();
        }
    }, [storiesDetail]);

    //Get Stories banner
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Stories.get('/public/list');
                const slicedData = response.data.slice(17, 22);
                setStories(slicedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    {storiesDetail && (
                        <div key={storiesDetail.id} className={cx('author')}>
                            {storiesDetail.authors[0].name && (
                                <div className={cx('author_info')}>
                                    <img
                                        className={cx('author_avt')}
                                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                        alt="image"
                                    />
                                    <div className={cx('author_name')}>
                                        <p>by</p>
                                        <h4>{storiesDetail.authors[0].name}</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className={cx('container')}>
                        {storiesDetail && (
                            <>
                                <div className={cx('story_name')}>
                                    <h4>{storiesDetail.title}</h4>
                                </div>
                                <div className={cx('story_content')}>
                                    <p>{storiesDetail.description}</p>
                                </div>
                            </>
                        )}

                        <div className={cx('control_chapter')}>
                            <button className={cx('prev_btn')}>Previous chapter</button>
                            <button className={cx('next_btn')}>Next chapter</button>
                        </div>
                        <div className={cx('comments')}>
                            <div className={cx('textbox')}>
                                <textarea placeholder="Write a comment..."></textarea>
                                <button type="button">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                            <div className={cx('comment_user')}>
                                {commentsByStoryId.map((comment) => {
                                    return (
                                        <ul key={comment.id} className={cx('cmt_list')}>
                                            <li className={cx('cmt_item')}>
                                                <div className={cx('cmt_content')}>
                                                    <h4>{comment.nicknameComment}</h4>
                                                    <span>{comment.content}</span>
                                                    <p>{comment.date}</p>
                                                </div>
                                            </li>
                                            {/* <li className={cx('cmt_item')}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU37FnbBg50aestSWYenXfXOSAK5UjVcHCJfgbl96rpocUMXtGqXaVFBxHbou9qWNzQoU&usqp=CAU" />
                                        <div className={cx('cmt_content')}>
                                            <h4>Nam Le</h4>
                                            <span>Let their retribution come in fire and agony</span>
                                            <p>3 days ago</p>
                                        </div>
                                    </li>
                                    <li className={cx('cmt_item')}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSinUiRqVB94sfZZbtNZgPJswUTs4R7YDskvXfVjUSejKfQqAoMaedQBNfybdIdduiix4&usqp=CAU" />
                                        <div className={cx('cmt_content')}>
                                            <h4>Do Van Duc</h4>
                                            <span>
                                                All trying to pimp ne bro??? Wtf is wrong with all. HOW THE FUCKKK YOU
                                                TRY N PIMP MY DAWG BRO😭😭😭😭.
                                            </span>
                                            <p>2 weeks ago</p>
                                        </div>
                                    </li> */}
                                        </ul>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner')}>
                        <div className={cx('title')}>
                            <h4>YOU'LL ALSO LIKE</h4>
                        </div>
                        <div className={cx('colection')}>
                            {stories.map((story) => {
                                return (
                                    <div key={story.id} className={cx('colection_item')}>
                                        <Link to={`/storydetail/${story.id}`}>
                                            <img
                                                src={`http://localhost:8080/api/v1/stories/public/${story.id}/image`}
                                                alt="image"
                                            />
                                        </Link>
                                        <div className={cx('content')}>
                                            <div className={cx('name')}>{story.title}</div>
                                            <p className={cx('description')}>{story.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoryDetail;

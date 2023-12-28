import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './StoryDetail.scss';

const cx = classNames.bind(styles);

function StoryDetail() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('author')}>
                        <div className={cx('author_info')}>
                            <img
                                className={cx('author_avt')}
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                            />
                            <div className={cx('author_name')}>
                                <p>by</p>
                                <h4>John</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('story_name')}>
                            <h4>The Mavel</h4>
                        </div>
                        <div className={cx('story_content')}>
                            <p>
                                The story of Paul Bunyan has been around in the United States for many years. He the
                                symbol of American frontier life, showing the ideal strength, work ethic and good
                                morality that Americans work hard to imitate. Paul Bunyan is considered a legend, so
                                stories about him are full of unusual details, such as eating 50 eggs in one day and
                                being so big that he caused an earthquake.
                                <br />
                                <br />
                                It can be a pretty funny read, with characters such as a blue ox and a reversible dog.
                                This version of the story is also meant to be read out loud, so its fast-paced and
                                entertaining. This website has an audio recording with the story, which you can play at
                                slower or faster speeds.
                                <br />
                                <br />
                                However, there are actually many different versions of “Cinderella.” This one by Charles
                                Perrault is the most well-known and is often the version told to children. “Cinderella”
                                is a beloved story because it describes how a kind and hard-working person was able to
                                get a happy ending.
                                <br />
                                <br />
                                Even though Cinderellas stepsisters treated her awfully, Cinderella herself remained
                                gentle and humble. It goes to show that even though you may experience hardships, its
                                important to stay kind, forgiving and mindful.
                            </p>
                        </div>
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
                                <ul className={cx('cmt_list')}>
                                    <li className={cx('cmt_item')}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU" />
                                        <div className={cx('cmt_content')}>
                                            <h4>Tung Nguyen</h4>
                                            <span>
                                                Hi! I'm an new author writing in a similar genre! Please come check out
                                                my new book: The Remnant Moon!{' '}
                                            </span>
                                            <p>1 days ago</p>
                                        </div>
                                    </li>
                                    <li className={cx('cmt_item')}>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner')}>
                        <div className={cx('title')}>
                            <h4>YOU'LL ALSO LIKE</h4>
                        </div>
                        <div className={cx('colection')}>
                            <div className={cx('colection_item')}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DD-pg-Ao8TYlbACSfte64golpXKf0joL_h4oVV5LIe8IcvXys6dW4Rb1O1a4yCTa-2o&usqp=CAU" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('colection_item')}>
                                <img src="https://cmavn.org/wp-content/uploads/2015/05/tat-den-264x205.jpg" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('colection_item')}>
                                <img src="https://product.hstatic.net/200000017360/product/sutichchucuoicungtrang_fb919958c6e94993b5a74cda9b40d2b9_master.jpg" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('colection_item')}>
                                <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_78863.jpg" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('colection_item')}>
                                <img src="https://vnu.edu.vn/upload/2012/09/13494/image/56.jpg" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('colection_item')}>
                                <img src="https://salt.tikicdn.com/media/catalog/product/c/h/chiec-luoc-nga_1.jpg" />
                                <div className={cx('content')}>
                                    <div className={cx('name')}>Mom and son</div>
                                    <p className={cx('description')}>
                                        The story of Paul Bunyan has been around in the United States for many years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoryDetail;

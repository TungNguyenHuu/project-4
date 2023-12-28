import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faImage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <>
            <div id="edit_controls" className={cx('edit_profile')}>
                <Link to="/">
                    <button className={cx('on_edit_back')}>
                        <FontAwesomeIcon className={cx('fachevron_left')} icon={faChevronLeft} />
                    </button>
                </Link>
                <div className={cx('wroks_item')}>
                    <p className={cx('small_title')}>Add Story Info</p>
                    <span className={cx('h4')}>Untitled Story</span>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('picture_sidebar')}>
                    <div className={cx('image_placeholder')}>
                        <img src="" className={cx('cover')} />
                        <button className={cx('cover_upload')} onClick={null}>
                            <FontAwesomeIcon className={cx('cover_icon')} icon={faImage} />
                            <div className={cx('add_cover_text')}>Add an image</div>
                        </button>
                    </div>
                </div>
                <div className={cx('main_edit_container')}>
                    <div className={cx('row')}>
                        <div className={cx('work_section')}>
                            <div className={cx('component_wrapper')}>
                                <div className={cx('work_edit_select')}>
                                    <button className={cx('on_switch_type')} data-section="story_detail">
                                        Story Details
                                    </button>
                                </div>
                            </div>
                            <form className={cx('main_edit_form')}>
                                <div className={cx('required_form_wrapper')}>
                                    <div className={cx('form_group', 'title_form')}>
                                        <label>Title</label>
                                        <span className={cx('empty_warning', 'hidden')}>Required</span>
                                        <input className={cx('story_title')} type="text" placeholder="Untitled story" />
                                    </div>
                                    <div className={cx('form_group', 'description_form')}>
                                        <label>Description</label>
                                        <span className={cx('empty_warning', 'hidden')}>Required</span>
                                        <textarea
                                            className={cx('story_description')}
                                            type="text"
                                            name="title"
                                            spellCheck="false"
                                        ></textarea>
                                    </div>
                                    <div className={cx('form_group', 'characters_form')}>
                                        <label>Main Character</label>
                                        <div className={cx('character')}>
                                            <input
                                                className={cx('character_input')}
                                                type="text"
                                                name="character"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('form_group', 'categoty_form')}>
                                        <label for="categoryselect">Category</label>
                                        <select id="categoryselect" className={cx('form_control')}>
                                            <option disabled="disabled">Select a category</option>
                                            <option>Humorous</option>
                                            <option>Horrified</option>
                                            <option>Fiction</option>
                                            <option>Folk</option>
                                            <option>Completed</option>
                                            <option>Adventure</option>
                                            <option>Fighting</option>
                                            <option>Castles</option>
                                            <option>Forbidden</option>
                                        </select>
                                        <span className={cx('empty_warning', 'hidden')}>Required</span>
                                    </div>
                                    <div className={cx('form_group', 'target_audience_form')}>
                                        <label for="target-audience">Target Audience</label>
                                        <select id="target-audience" className={cx('form_control')}>
                                            <option selected="true" disabled="disabled">
                                                Who is your primary audience?
                                            </option>
                                            <option value="13 - 18">Young Adult (13-18 years of age)</option>
                                            <option value="18-25">New Adult (18-25 years of age)</option>
                                            <option value="25+">Adult (25+ years of age)</option>
                                        </select>
                                        <span className={cx('empty_warning', 'hidden')}>Required</span>
                                    </div>
                                    <div className={cx('action_btn_form')}>
                                        <button className={cx('btn_grey', 'on_edit_cancel')}>Cancel</button>
                                        <button className={cx('btn_orange', 'on_edit_save')} type="submit">
                                            Upload story
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CategoryDetail.scss';

const cx = classNames.bind(styles);

const CATEGORY_ITEMS = [
    { tag: 'Adventure' },
    { tag: 'Mafia' },
    { tag: 'Mature' },
    { tag: 'Action' },
    { tag: 'Guns' },
    { tag: 'Romance' },
    { tag: 'Darkromance' },
    { tag: 'Kidnapped' },
    { tag: 'Adventure' },
    { tag: 'Mafia' },
    { tag: 'Mature' },
    { tag: 'Action' },
    { tag: 'Guns' },
    { tag: 'Romance' },
];

const STORY_ITEM = [
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
    {
        image: 'https://img.wattpad.com/cover/128034696-144-k549891.jpg',
        title: 'The Last of the Dragons-Set 1',
        description: `Book 1:The Last Dragon(chp 1-125) Book 2:The Return(chp 126-170) Book
        3:Friend or Enemy(chp171-200) ***Inspired by Game Of Thrones*** For
        generations, the people of th`,
        tag: 'Adventure',
    },
];

function CategoryDetail() {
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
                                    {CATEGORY_ITEMS.map((cate) => {
                                        return (
                                            <Link to={`/catedetail/${cate.tag}`}>
                                                <div key={cate.id} className={cx('tag_item')}>
                                                    {cate.tag}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper_story')}>
                        {STORY_ITEM.map((item) => {
                            return (
                                <div key={item.id} className={cx('story_item')}>
                                    <div className={cx('story_image')}>
                                        <img src={item.image} />
                                    </div>
                                    <div className={cx('content')}>
                                        <div className={cx('story_title')}>{item.title}</div>
                                        <div className={cx('description')}>{item.description}</div>
                                        <div className={cx('tag')}>
                                            <a className={cx('tag_item')} href="">
                                                {item.tag}
                                            </a>
                                        </div>
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

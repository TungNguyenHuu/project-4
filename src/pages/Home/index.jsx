import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const images = [
    'https://ma.wattpad.com/big-hits-3-mbbf-1_hfc_desktop_v4.jpg',
    'https://ma.wattpad.com/mbbf_s3_free_hfc_desktop_final.jpg',
    'https://ma.wattpad.com/chasing_the_cure_hfc_desktop_final.jpg',
    'https://ma.wattpad.com/reading-list_sports-romance_hfc_desktop_v5.jpg',
];

const stories_img = [
    {
        img: 'https://img.wattpad.com/cover/11287121-100-k261461.jpg',
        tag: 'Adventure',
    },
    {
        img: 'https://img.wattpad.com/cover/12479590-100-k545702.jpg',
        tag: 'Castles',
    },
    {
        img: 'https://img.wattpad.com/cover/215189249-100-k4578.jpg',
        tag: 'Completed',
    },
    {
        img: 'https://img.wattpad.com/cover/39482024-100-k281505.jpg',
        tag: 'Fighting',
    },
    {
        img: 'https://img.wattpad.com/cover/422987-100-k990535.jpg',
        tag: 'Adventure',
    },
    {
        img: 'https://img.wattpad.com/cover/268135109-100-k837446.jpg',
        tag: 'Forbidden',
    },
];

function Home() {
    const [current, setCurrent] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidthRef = useRef(null);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
        }, 3000); // Thay đổi slide mỗi 3 giây

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, [current, images.length]);

    // checkTokenRoleLogin
    useEffect(()=>{
        // lấy đc token ở localstore
        //gọi api để check login and role
        //if token đúng => role // lưu nó vào globalstate
    },[])

    // Handle prev, next story_carousel
    const totalSlides = stories_img.length;

    const nextStory = () => {
        const slideWidthElement = slideWidthRef.current;
        if (slideWidthElement && currentIndex < totalSlides - 5) {
            setCurrentIndex(currentIndex + 1);
            slideWidthElement.style.transform = `translateX(-${(currentIndex + 1) * slideWidthElement.offsetWidth}px)`;
        }
    };

    const prevStory = () => {
        const slideWidthElement = slideWidthRef.current;
        if (slideWidthElement && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            slideWidthElement.style.transform = `translateX(-${(currentIndex - 1) * slideWidthElement.offsetWidth}px)`;
        }
    };

    return (
        <div className={cx('app_container')}>
            <div className={cx('section_wrapper')}>
                <div className={cx('featured_carousel')}>
                    <div className={cx('slider_title')}>
                        <h2>Prologue</h2>
                        <p>We are pleased to bring the best experience to our readers.</p>
                    </div>
                    <div className={cx('slider')}>
                        <div className={cx('carousel')}>
                            <FontAwesomeIcon icon={faCircleLeft} className={cx('left-arrow')} onClick={prevSlide} />
                            <FontAwesomeIcon icon={faCircleRight} className={cx('right-arrow')} onClick={nextSlide} />
                            {images.map((image, index) => (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && (
                                        <img src={image} alt={`Slide ${index}`} className={cx('image')} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('story_swimlane_module')}>
                    <div className={cx('module_content')}>
                        <div className={cx('module_header')}>
                            <div className={cx('left_section')}>
                                <div className={cx('heading')}>
                                    <h3>Top Picks For You</h3>
                                </div>
                            </div>
                        </div>
                        <div className={cx('story_carousel')}>
                            <div className={cx('carousel_container')}>
                                <div className={cx('slider_story')}>
                                    <div className={cx('slider_frame')}>
                                        <ul className={cx('slider_list')}>
                                            {stories_img.map((image, index) => (
                                                <li key={index} className={cx('slider_slide')}>
                                                    <div className={cx('story_item')}>
                                                        <div className={cx('cover')}>
                                                            <a href="">
                                                                <img src={image.img} />
                                                            </a>
                                                        </div>
                                                        <div className={cx('tag')}>
                                                            <a className={cx('tag_item')} href="">
                                                                {image.tag}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('slider_control_left')}>
                                        <FontAwesomeIcon
                                            className={cx('control_prev')}
                                            icon={faCircleLeft}
                                            onClick={prevStory}
                                        />
                                    </div>
                                    <div className={cx('slider_control_right')}>
                                        <FontAwesomeIcon
                                            className={cx('control_next')}
                                            icon={faCircleRight}
                                            onClick={nextStory}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('story_swimlane_module_hero')}>
                    <div className={cx('module_content')}>
                        <div className={cx('module_header')}>
                            <div className={cx('left_section')}>
                                <div className={cx('heading')}>
                                    <h3>Outstanding stories</h3>
                                </div>
                                <div className={cx('subheading')}>
                                    <h4>Binge from start to finish</h4>
                                </div>
                            </div>
                        </div>
                        <div className={cx('hero_item')}>
                            <div className={cx('hero')}>
                                <div className={cx('cover')}>
                                    <a href="">
                                        <img src="https://img.wattpad.com/cover/257468746-256-k968278.jpg" />
                                    </a>
                                </div>
                                <div className={cx('hero_content')}>
                                    <a className={cx('title')} href="">
                                        <p>Alpha Kane</p>
                                    </a>
                                    <p className={cx('description')}>
                                        At the age of 31 Alpha Kane Locus Black had given up on looking for his mate,
                                        since the age of 18 it was all he wanted, now at 31 he was cold, scary and
                                        distant Alpha to his pack. Until he meets Sora. His little human mate. * Book 1
                                        of the Alpha series *
                                    </p>
                                    <div className={cx('tags_list')}>
                                        <a className={cx('tag_item')}>powerful</a>
                                        <a className={cx('tag_item')}>shy</a>
                                        <a className={cx('tag_item')}>possessive</a>
                                        <a className={cx('tag_item')}>interesting</a>
                                        <a className={cx('tag_item')}>mystery</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('story_carousel')}>
                            <div className={cx('carousel_container')}>
                                <div className={cx('slider_story')}>
                                    <div className={cx('slider_frame')}>
                                        <ul className={cx('slider_list')}>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/228826651-100-k534671.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            Completed
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/232895748-100-k921718.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            Babydaddy
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/215189249-100-k4578.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            Sexy
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/67883498-100-k266777.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            Stalker
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/214825224-100-k892973.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            werewolf
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={cx('slider_slide')}>
                                                <div className={cx('story_item')}>
                                                    <div className={cx('cover')}>
                                                        <a href="">
                                                            <img src="https://img.wattpad.com/cover/103356948-100-k126527.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className={cx('tag')}>
                                                        <a className={cx('tag_item')} href="">
                                                            Adventure
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('slider_control_left')}>
                                        <FontAwesomeIcon
                                            className={cx('control_prev')}
                                            icon={faCircleLeft}
                                            onClick={prevSlide}
                                        />
                                    </div>
                                    <div className={cx('slider_control_right')}>
                                        <FontAwesomeIcon
                                            className={cx('control_next')}
                                            icon={faCircleRight}
                                            onClick={nextSlide}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
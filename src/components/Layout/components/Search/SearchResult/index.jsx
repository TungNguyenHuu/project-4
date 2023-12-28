import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const location = useLocation();
    const { results } = location.state || {};

    console.log(results);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('search_result')}>
                    {results &&
                        results.map((item, index) => (
                            <div key={index} className={cx('result_item')}>
                                <div className={cx('cover')}>
                                    <img src={item.avatar} />
                                </div>
                                <div className={cx('content')}>
                                    <h3 className={cx('title')}>{item.fullname}</h3>
                                    <div className={cx('description')}>{item.bio}</div>
                                    <div className={cx('tag')}></div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={cx('banner')}></div>
            </div>
        </div>
    );
}

export default SearchResult;

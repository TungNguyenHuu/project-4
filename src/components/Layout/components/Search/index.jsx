import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import SearchResult from './SearchResult';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false); // State điều khiển hiển thị trang kết quả

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
            });
    }, [debounced]);

    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && (debounced.trim() || searchResults.length > 0)) {
            navigate('/searchresult', { state: { results: searchResults } });
        }
    };

    return (
        <div className={cx('search')}>
            <button className={cx('search_btn')} onClick={() => setShowResults(true)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
                value={searchValue}
                placeholder="Search"
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export default Search;

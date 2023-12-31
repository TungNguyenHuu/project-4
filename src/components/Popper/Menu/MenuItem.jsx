import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link to={`/catedetail/${data.id}`}>
            <button className={cx('menu-item')}>{data.name}</button>
        </Link>
    );
}

export default MenuItem;

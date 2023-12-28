import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link to={data.to}>
            <button className={cx('menu-item')}>{data.title}</button>
        </Link>
    );
}

export default MenuItem;

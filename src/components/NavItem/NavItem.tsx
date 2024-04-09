import { Link } from 'react-router-dom';
import styles from '../NavItem/NavItem.module.css';

interface NavItemProps {
  title: string;
  path: string;
}

function NavItem({title, path} : NavItemProps) {

  console.log(title, path);

  return (
    <>
      <div className={styles['nav-item']}>
        <Link to={path}>{title}</Link>
      </div>
    </>
  );
}

export default NavItem;
  
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';
import {NavItemProps} from "./types.ts";

function NavItem({title, path} : NavItemProps) {


  return (
    <>
      <div className={styles['nav-item']}>
        <Link className={styles['nav-item-link']} to={path}>{title}</Link>
      </div>
    </>
  );
}

export default NavItem;
  
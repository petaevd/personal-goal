import NavItem from '../NavItem/NavItem.tsx';
import styles from './NavMenu.module.css';

function NavMenu() {

  return (
    <>
      <nav className={styles['nav']}>
        <NavItem title="Цели" path="/goals"/>
        <NavItem title="Профиль" path="/profile"/>
      </nav>
    </>
  );
}
  
export default NavMenu;
  
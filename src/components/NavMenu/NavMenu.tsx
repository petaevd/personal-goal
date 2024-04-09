import NavItem from '../NavItem/NavItem';
import styles from '../NavMenu/NavMenu.module.css';

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
  
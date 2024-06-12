import HeaderButton from '../HeaderButton/HeaderButton.tsx';
import styles from './NavMenu.module.css';

function NavMenu() {

  return (
    <>
      <nav className={styles['nav']}>
        <HeaderButton title="Цели" path="/goals"/>
        <HeaderButton title="Профиль" path="/profile"/>
      </nav>
    </>
  );
}
  
export default NavMenu;
  
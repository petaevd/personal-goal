import NavMenu from '../NavMenu/NavMenu'; 
import Logo from '../Logo/Logo';
import styles from '../Header/Header.module.css';
import HeaderButtons from '../HeaderButtons/HeaderButtons';

function Header() {

  return (
    <>
      <header className={styles['header']}>
        <Logo />
        <NavMenu />
        <HeaderButtons />
      </header>
    </>
  );
}
  
export default Header;
  
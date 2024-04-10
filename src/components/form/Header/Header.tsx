import NavMenu from '../../ui/Header/NavMenu/NavMenu.tsx';
import Logo from '../../ui/Header/Logo/Logo.tsx';
import styles from './Header.module.css';
import HeaderButtons from '../../ui/Header/HeaderButtons/HeaderButtons.tsx';

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
  
import NavMenu from '@components/ui/Header/NavMenu/NavMenu.tsx';
import Logo from '@components/ui/Header/Logo/Logo.tsx';
import styles from './Header.module.css';
import HeaderButtons from '@components/ui/Header/AuthButtons/HeaderButtons.tsx';

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
  
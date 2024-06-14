import NavMenu from '@components/ui/Header/NavMenu/NavMenu.tsx';
import Logo from '@components/ui/Header/Logo/Logo.tsx';
import styles from './Header.module.css';
import HeaderButtons from '@components/ui/Header/AuthButtons/HeaderButtons.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsAuth, logout} from '@/redux/slices/auth.ts';
import Logout from '@components/ui/Header/Logout/Logout.tsx';
import {useNavigate} from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const onClickLogout = () =>{
    dispatch(logout());
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <header className={styles['header']}>
        <Logo />
        {isAuth ?
          <>
            <NavMenu />
            <Logout onClick={ onClickLogout }/>
          </>
          :
          <HeaderButtons />
        }
      </header>
    </>
  );
}
  
export default Header;
  
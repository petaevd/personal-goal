import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth, selectRole, logout } from '@/redux/slices/auth.ts';
import { useNavigate } from 'react-router-dom';
import AdminButton from '@components/ui/Header/AdminButton/AdminButton.tsx';
import NavMenu from '@components/ui/Header/NavMenu/NavMenu.tsx';
import Logo from '@components/ui/Header/Logo/Logo.tsx';
import styles from './Header.module.css';
import HeaderButtons from '@components/ui/Header/AuthButtons/HeaderButtons.tsx';
import Logout from '@components/ui/Header/Logout/Logout.tsx';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    navigate('/');
  };

  const onClickAdminPanel = () => {
    navigate('/admin');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);

  return (
    <header className={styles['header']}>
      <Logo />
      {isAuth ? (
        <>
          {role === 'ADMIN' && (
            <>
              <AdminButton onClick={onClickAdminPanel} />
              <Logout onClick={onClickLogout} />
            </>
          )}
          {role !== 'ADMIN' && (
            <>
              <NavMenu />
              <Logout onClick={onClickLogout} />
            </>
          )}
        </>
      ) : (
        <HeaderButtons />
      )}
    </header>
  );
}

export default Header;

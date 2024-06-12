import HeaderButton from '../HeaderButton/HeaderButton.tsx';
import styles from './HeaderButtons.module.css';

function HeaderButtons() {

  return (
    <>
      <div className={styles['auth-buttons']}>
        <HeaderButton path="/login" title="Войти"/>
        <HeaderButton path="/register" title="Регистрация"/>
      </div>
    </>
  );
}
  
export default HeaderButtons;
  
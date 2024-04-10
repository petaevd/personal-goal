import AuthButton from '../AuthButton/AuthButton.tsx';
import styles from './HeaderButtons.module.css';

function HeaderButtons() {

  return (
    <>
      <div className={styles['auth-buttons']}>
        <AuthButton path="/login" title="Войти"/>
        <AuthButton path="/signup" title="Регистрация"/>
      </div>
    </>
  );
}
  
export default HeaderButtons;
  
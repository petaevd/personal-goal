import AuthButton from '../AuthButton/AuthButton';
import styles from '../HeaderButtons/HeaderButtons.module.css';

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
  
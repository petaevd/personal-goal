import styles from './Logo.module.css';
import LogoImg from '@assets/svg/logo.svg';

function Logo() {

  return (
      <>
          <div className={styles['logo']}>
              <img className={styles['logo-img']} src={LogoImg} alt="Логотип сайта"/>
          </div>
      </>
  );
}
  
export default Logo;
  
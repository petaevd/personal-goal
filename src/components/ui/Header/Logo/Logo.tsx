import styles from './Logo.module.css';
import LogoImg from '@assets/svg/logo.svg';
import {Link} from 'react-router-dom';

function Logo() {

  return (
    <>
      <Link to={'/'} className={styles['logo']}>
        <div className={styles['logo-text']}>Personal</div>
        <img className={styles['logo-img']} src={LogoImg} alt="Логотип сайта"/>
        <div className={styles['logo-text']}>Goal</div>
      </Link>
    </>
  );
}
  
export default Logo;
  
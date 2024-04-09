import { Link } from 'react-router-dom';
import styles from '../AuthButton/AuthButton.module.css';

interface AuthButtonProps {
  title: string;
  path: string;
}

function AuthButton({title, path} : AuthButtonProps) {

  return (
    <>
      <div className={styles['auth-button']}>
        <Link to={path}>{title}</Link>
      </div>
    </>
  );
}
  
export default AuthButton;
  
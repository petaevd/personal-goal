import { Link } from 'react-router-dom';
import styles from './AuthButton.module.css';
import {AuthButtonProps} from "./types.ts";

function AuthButton({title, path} : AuthButtonProps) {

  return (
    <>
      <div className={styles['auth-button']}>
        <Link className={styles['auth-button-link']} to={path}>{title}</Link>
      </div>
    </>
  );
}
  
export default AuthButton;
  
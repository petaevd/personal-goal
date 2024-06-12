import { Link } from 'react-router-dom';
import styles from './HeaderButton.module.css';
import {HeaderButtonProps} from './types.ts';

function HeaderButton({title, path} : HeaderButtonProps) {


  return (
    <>
      <div className={styles['header-button']}>
        <Link className={styles['header-button-link']} to={path}>{title}</Link>
      </div>
    </>
  );
}

export default HeaderButton;

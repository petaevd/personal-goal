import styles from './Logout.module.css';

interface ChildComponentProps {
  onClick: () => void;
}

const Logout = ({ onClick } : ChildComponentProps) => {

  return(
    <button className={styles['logout-button']} onClick={onClick}>
      Выйти
    </button>
  );
};

export default Logout;
import styles from './AdminButton.module.css';
import HeaderButton from '@components/ui/Header/HeaderButton/HeaderButton.tsx';

interface ChildComponentProps {
  onClick: () => void;
}
const AdminButton = ({ onClick } : ChildComponentProps) => {

  return(
    <div className={styles['admin-button']} onClick={onClick}>
      <HeaderButton path='/admin' title="АдминПанель"/>
    </div>
  );
};

export default AdminButton;
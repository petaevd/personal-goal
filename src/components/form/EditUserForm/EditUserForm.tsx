import { useState } from 'react';
import styles from './EditUserForm.module.css';

interface User {
  id: number;
  userName: string;
  login: string;
  role: string;
}

interface EditUserFormProps {
  initialData: User;
  onSave: (updatedUser: User) => void;
  onClose: () => void;
}

const EditUserForm = ({ initialData, onSave, onClose }: EditUserFormProps) => {
  const [userName, setUserName] = useState(initialData.userName);
  const [login, setLogin] = useState(initialData.login);
  const [role, setRole] = useState(initialData.role);

  const handleSave = () => {
    const updatedUser = { ...initialData, userName, login, role };
    onSave(updatedUser);
  };

  return (
    <div className={styles['edit-user-form']}>
      <h3>Редактировать пользователя</h3>
      <label>
        Имя:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Логин:
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        Роль:
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      </label>
      <button className={styles['save-btn']} onClick={handleSave}>Сохранить</button>
      <button className={styles['cancel-btn']} onClick={onClose}>Отмена</button>
    </div>
  );
};

export default EditUserForm;

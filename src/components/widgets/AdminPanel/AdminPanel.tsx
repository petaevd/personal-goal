import { useEffect, useState } from 'react';
import axios from '@/axios.ts';
import styles from './AdminPanel.module.css';
import EditUserModal from './../../../modal/Modal/Modal';
import EditUserForm from '@components/form/EditUserForm/EditUserForm';

interface User {
  id: number;
  userName: string;
  login: string;
  role: string;
}

const AdminPanel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Запрос на получение пользователей
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/admin/getAllUsers');
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.log('Неверный формат данных');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  // Открытие модального окна для редактирования
  const handleEdit = (user: User) => {
    setCurrentUser(user);  // Устанавливаем текущего пользователя для редактирования
    setIsEditModalOpen(true); // Открываем модальное окно
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setCurrentUser(null); // Очищаем состояние редактирования
  };

  // Сохранение изменений
  const handleSave = async (updatedUser: User) => {
    try {
      await axios.put(`/admin/updateUser/${updatedUser.id}`, updatedUser);
      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      handleCloseModal(); // Закрываем модальное окно после сохранения
    } catch (error) {
      console.log(error);
    }
  };

  // Функция для удаления пользователя
  const handleDelete = async (userId: number) => {
    try {
      await axios.delete(`/admin/deleteUser/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles['admin-panel']}>
      <h2 className={styles['admin-panel-title']}>Список пользователей</h2>
      
      <table className={styles['admin-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.login}</td>
              <td>{user.role}</td>
              <td>
                <button className={styles['edit-btn']} onClick={() => handleEdit(user)}>Редактировать</button>
                <button className={styles['delete-btn']} onClick={() => handleDelete(user.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Модальное окно для редактирования пользователя */}
      {currentUser && (
        <EditUserModal isOpen={isEditModalOpen} onClose={handleCloseModal}>
          <EditUserForm
            initialData={currentUser}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        </EditUserModal>
      )}
    </div>
  );
};

export default AdminPanel;

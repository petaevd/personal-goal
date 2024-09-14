import styles from './Profile.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from '@/redux/slices/auth.ts'; // Импорт действия для загрузки данных
import { selectIsAuth } from '@/redux/slices/auth.ts'; // Импорт селекторов

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth.data); // Данные пользователя из Redux
  const isAuth = useSelector(selectIsAuth); // Проверка авторизации

  useEffect(() => {
    // Загружаем данные о пользователе при монтировании
    if (isAuth) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch, isAuth]);

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Профиль</h1>
      {!userData ? (
        <p>Загрузка данных...</p>
      ) : (
        <div className={styles.userInfo}>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Имя:</strong> {userData.userName}</p>
          <p><strong>Email:</strong> {userData.login}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

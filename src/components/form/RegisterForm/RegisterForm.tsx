import styles from './RegisterForm.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { fetchRegister, selectIsAuth } from '@/redux/slices/auth.ts';
import {useNavigate} from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      userName: '',
      login: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async ( values : object) => {
    try {
      const data = await dispatch(fetchRegister(values));

      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
    }
  };

  if(isAuth){
    navigate('/');
  }

  return(
    <div className={styles['page']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form-container']}>
        <div>Регистрация</div>
        <label htmlFor="name">Имя:</label>
        <input
          id="userName"
          type="text"
          {...register('userName', { required: 'Введите ваше имя' })}
        />
        <label htmlFor="email">Логин:</label>
        <input
          id="email"
          type="email"
          {...register('login', { required: 'Укажите почту' })}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Введите пароль' })}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

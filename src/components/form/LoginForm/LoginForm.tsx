import styles from './LoginForm.module.css';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth} from '@/redux/slices/auth.ts';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      login: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async ( values : object) => {
    try {
      const data = await dispatch(fetchLogin(values));

      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };

  if(isAuth){
    navigate('/');
  }

  return (
    <div className={styles['page']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
        <div>Войти</div>
        <label htmlFor="login">E-mail:</label>
        <input
          id="login"
          type="email"
          {...register('login', { required: 'Укажите почту' })}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Введите пароль' })}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
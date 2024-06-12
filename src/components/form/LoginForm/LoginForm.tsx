import styles from './LoginForm.module.css';
import { useFormik } from 'formik';
import { LoginTypes } from './types.ts';

const validate = (values: LoginTypes) => {
  const errors: { login?: string; password?: string } = {};

  if (!values.login) {
    errors.login = 'Обязательное поле';
  } else if (values.login.length < 6) {
    errors.login = 'Логин не может быть короче 6 символов';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль не может быть короче 6 символов';
  }

  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles['page']}>
      <form onSubmit={formik.handleSubmit} className={styles['login-form']}>
        <div>Войти</div>
        <label htmlFor="login">E-mail:</label>
        <input
          id="login"
          name="login"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
        />
        {formik.errors.login ? <div>{formik.errors.login}</div> : null}
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
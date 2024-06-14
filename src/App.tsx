import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import GoalsPage from './pages/GoalsPage/GoalsPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterForm from '@components/form/RegisterForm/RegisterForm.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAuthMe, selectIsAuth} from '@/redux/slices/auth.ts';


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={ <MainPage /> }/>
        <Route path='/profile' element={ <ProfilePage /> }/>
        <Route path='/goals' element={ <GoalsPage /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/register' element={ <RegisterForm />}/>
        <Route path='*' element={ <MainPage /> }/>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import GoalsPage from './pages/GoalsPage/GoalsPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import {useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {fetchAuthMe } from '@/redux/slices/auth.ts';
import AdminPage from '@pages/AdminPage/AdminPage.tsx';
import RegisterPage from '@pages/RegisterPage/RegisterPage.tsx';


function App() {
  const dispatch = useDispatch();

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
        <Route path='/register' element={ <RegisterPage />}/>
        <Route path='/admin' element={ <AdminPage /> }/>
        <Route path='*' element={ <MainPage /> }/>
      </Routes>
    </>
  );
}

export default App;

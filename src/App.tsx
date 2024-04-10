import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import GoalsPage from './pages/GoalsPage/GoalsPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import SignupPage from './pages/SignupPage/SignupPage.tsx';


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={ <MainPage /> }/>
        <Route path='/profile' element={ <ProfilePage /> }/>
        <Route path='/goals' element={ <GoalsPage /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/signup' element={ <SignupPage />}/>
        <Route path='*' element={ <MainPage /> }/>
      </Routes>
    </>
  );
}

export default App;

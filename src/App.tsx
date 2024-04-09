import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Profile from './page/Profile';
import Goals from './page/Goals';

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/goals' element={ <Goals /> }/>
        <Route path='*' element={ <Main /> }/>
      </Routes>
    </>
  );
}

export default App;

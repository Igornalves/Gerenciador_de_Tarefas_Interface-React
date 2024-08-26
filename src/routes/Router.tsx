import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/intex';
import SignIn from '../pages/SignIn/intex';
import SignUp from '../pages/SignUp/intex';

export function Router() {
   return (
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signin' element={<SignIn/>} />
         <Route path='/signup' element={<SignUp/>} />
      </Routes>
   )
}
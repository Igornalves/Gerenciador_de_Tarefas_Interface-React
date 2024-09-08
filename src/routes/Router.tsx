import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/intex';
import SignUp from '../pages/SignUp/intex';
import { ProtegerRotas } from '../components/ProtegerRotas/intex';
import Home from '../pages/Home/intex';

export function Router() {
   return (
      <Routes>
         <Route path='/' element={<SignIn />} />
         <Route path='/signup' element={<SignUp />} />
         <Route element={<ProtegerRotas />}>
            <Route path='/home' element={<Home />} />
         </Route>
      </Routes>   
   )
}
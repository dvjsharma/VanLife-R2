//react stuff
import { Route, Routes } from 'react-router-dom';
//components
import About from './Components/about';
import Layout from './Components/layout';
import Home from './Components/home';
import Test from './Components/test';
import Vans from './Components/vans'
import Van from './Components/van'
import Error from './Components/404error';
import Login from './Components/login';
//host
import Dashboard from './Components/Host/dash'
import Income from './Components/Host/income'
import Reviews from './Components/Host/reviews'
import Layout2 from './Components/Host/layout2'
import VanList from './Components/Host/vanlist'
import VanC from './Components/Host/vansC'
import Details from './Components/Host/details';
import Pricing from './Components/Host/pricing';
import Photos from './Components/Host/photos';
import Profile from './Components/profile';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<Van/>} />
          <Route path='login' element={<Login/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='host' element={<Layout2/>}>
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='vans' element={<VanList/>} />
            <Route path='vans/:id' element={<VanC/>}>
              <Route index element={<Details/>} />
              <Route path='pricing' element={<Pricing/>} />
              <Route path='photos' element={<Photos/>} />
            </Route>
          </Route>
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

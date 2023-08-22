//react stuff
import { Route, Routes } from 'react-router-dom';
//components
import About from './Components/about';
import Layout from './Components/layout';
import Home from './Components/home';
import Test from './Components/test';
import Vans from './Components/vans'
import Van from './Components/van'
//host
import Dashboard from './Components/Host/dash'
import Income from './Components/Host/income'
import Reviews from './Components/Host/reviews'
import Layout2 from './Components/Host/layout2'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<Van/>} />
          <Route path='host' element={<Layout2/>}>
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

//react stuff
import { Route, Routes } from 'react-router-dom';
//components
import About from './Components/about';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Test from './Components/test';
import Vans from './Components/vans'
//css

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>} />
      </Routes>
    </>
  );
}

export default App;

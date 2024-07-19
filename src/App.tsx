import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/landing/Navbar';
import SignupWrapper from './components/landing/SignupWrapper';

 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<SignupWrapper/>} path='/signup'/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

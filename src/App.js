import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Users from './Pages/Users/Users';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

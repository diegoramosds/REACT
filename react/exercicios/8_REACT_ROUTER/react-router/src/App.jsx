
import './App.css'

// 1
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import Info from './pages/Info';
import Page404 from './pages/Page404';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';


function App() {
  return (
    <>
      <div className='App'>
       <h1>React router</h1>
       <BrowserRouter>
       {/* 2- links com react router */}
        <NavBar/>
        {/* 9- Search*/}
        <SearchForm/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* 6/ nested route */}
              <Route path='/products/:id/info' element={<Info />} />
              {/*4- rota dinamica */}
              <Route path='/products/:id' element={<Products />} />
              {/* 9- search */}
              <Route path='/search' element={<Search />} />
              {/* 10- redirect */}
              <Route path='/company' element={<Navigate to="/about" />} />
              {/* 7- */}
              <Route path='*' element={<Page404 />} />
              

          </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}  

export default App

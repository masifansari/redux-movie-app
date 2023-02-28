import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetails/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:imdbID' element={<MovieDetail />}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

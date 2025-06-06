import './App.css'
import { Route, Routes } from 'react-router'

import DefaultLayout from './layouts/default/DefaultLayout';
import Home from './pages/home/Home';
import News from './pages/news/News';
import Explore from './pages/explore/Explore';
import About from './pages/about/About';
import Api from './pages/api/Api';
import Algorithms from './pages/algorithms/Algorithms';

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/api' element={<Api />}/>
        <Route path='/algorithms' element={<Algorithms />}/>
      </Routes>
    </DefaultLayout>
  );
}

export default App

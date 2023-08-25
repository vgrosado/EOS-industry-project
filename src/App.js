import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import ExplorePage from './Pages/ExplorePage/ExplorePage';

function App() {
  return (
    <main className='App'>
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/ExplorePage' element={<ExplorePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </main>
    
  );
}

export default App;

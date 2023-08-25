import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

// let name = "Femsworld";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:name' element={<Details />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

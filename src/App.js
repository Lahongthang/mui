import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchAppBar from './components/AppBar';
import TemporaryDrawer from './components/Drawer';
import Home from './pages/Home';
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar/>
      {/* <TemporaryDrawer/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

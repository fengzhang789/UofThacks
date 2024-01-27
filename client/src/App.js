import './App.css';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
      </Routes> 
    </>
  );
}

export default App;

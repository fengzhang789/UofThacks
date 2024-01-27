import './App.css';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import Bottle from './pages/Bottle/Bottle';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/bottle" element={<Bottle />}></Route>
      </Routes> 
    </>
  );
}

export default App;

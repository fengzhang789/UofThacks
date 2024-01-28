import './App.css';
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Bottle from './pages/Bottle/Bottle';
import Waves from './pages/Bottle/Waves'
import Upload from './pages/Upload'
import Water from './pages/Water';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/bottle" element={<Bottle />}></Route>
          <Route path="/waves" element={<Waves />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/water" element={<Water />}></Route>
      </Routes> 
    </>
  );
}

export default App;

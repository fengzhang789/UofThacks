import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Login />
      <>
        {isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      }
      </>
    </>
    
    
  );
}

export default App;

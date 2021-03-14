import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  // pegando o estado LOADING
  const { isLoading } = useAuth0()

  // se estiver carregando
  if (isLoading) { return <div id="loading">Loading...</div> }

  return (
    <>
      <Profile />
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;

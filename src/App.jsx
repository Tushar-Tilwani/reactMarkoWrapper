import logo from './assets/images/logo.svg';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <Button />
      </header>
    </div>
  );
}

export default App;

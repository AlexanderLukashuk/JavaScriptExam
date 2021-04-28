import logo from './logo.svg';
import Welcome from './сomponets/Welcome'
import WelcomePage from './сomponets/WelcomePage'
import './App.css';
import './сomponets/css/style.min.css';

function App() {
  const arr = ['Dungeon master', 'Dungeon master2', 'Dungeon master3']
  return (
    <div class="header">
      <a href="#" class="header__logo">ImageStock</a>
        <WelcomePage/>
    </div>

  );
}

export default App;

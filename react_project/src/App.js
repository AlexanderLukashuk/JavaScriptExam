import logo from './logo.svg';
import Welcome from './сomponets/Welcome'
import './App.css';
import './сomponets/css/style.min.css';

function App() {
  const arr = ['Dungeon master', 'Dungeon master2', 'Dungeon master3']
  return (
    <div class="header">
      <div>
        <Welcome name='Dungeon master' />
      </div>
    </div>

  );
}

export default App;

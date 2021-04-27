import logo from './logo.svg';
import Welcome from './сomponets/Welcome'
import './App.css';
import './сomponets/css/style.min.css';

function App() {
  const arr = ['Dungeon master', 'Dungeon master2', 'Dungeon master3']
  return (
    <div>
      <Welcome name='Dungeon master' />
    </div>
        
  );
}

export default App;

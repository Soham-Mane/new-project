import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Navbar from '../src/components/Navbar/Navbar'
import Topmost from '../src/components/Topmost/Topmost'
function App() {
  return (
    <div className="App">
  <Signup/>
  <Topmost/>
  <Navbar/>
    </div>
  );
}

export default App;

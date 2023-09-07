import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieList from './components/Movies';
import MovieDesc from './components/MovieDesc';

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<MovieList/>} />
            <Route path="/movie/:id" element={<MovieDesc/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

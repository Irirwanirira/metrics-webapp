import { BrowserRouter as Router, Route ,Routes  } from 'react-router-dom';
import './App.css'
import Details from './components/details';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
      <div>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;

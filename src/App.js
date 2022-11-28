import { BrowserRouter as Router, Route ,Routes  } from 'react-router-dom';
import './App.css'
import Details from './components/details';
import Home from './components/Home';
import Nav from './components/nav';

function App() {
  return (
    <Router>
    <div>
      <Nav />
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

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (  
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/api/users' element={<Register/>}/>
          <Route path='/api/users/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
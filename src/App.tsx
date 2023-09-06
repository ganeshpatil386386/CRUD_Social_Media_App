import  { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Main from './pages/Min'
import Login from './pages/Login'
import CreatePost from './pages/create-post/createpost'
import { Navbar } from './components/navbar'
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Login" element= {<Login />}/>
          <Route path="createpost" element= {<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

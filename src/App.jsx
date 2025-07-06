import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'
import './styles/common.css'
import Header from './components/common/Header';
import Home from './pages/home/Home';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>  
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

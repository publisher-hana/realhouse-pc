import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'
import './styles/common.css'
import Header from './components/common/Header';
import Home from './pages/home/Home';
import Footer from './components/common/Footer';
import MyPage from './pages/home/MyPage';
import ItemSearch from './pages/offer/ItemSearch';
import { VisitRequest } from './pages/offer/VisitRequest';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/itemSch' element={<ItemSearch />} />
          <Route path='/visitReq' element={<VisitRequest />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

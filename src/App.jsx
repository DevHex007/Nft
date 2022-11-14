import { Routes,Route, BrowserRouter} from 'react-router-dom'
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home';
import About from './components/About';
import './App.css';
import ComingSoon from './components/ComingSoon';
import LitePapper from './components/LitePapper';
import RoadMap from './components/RoadMap';
import Tokenomics from './components/Tokenomics';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Routes>
      <Route path='Home' element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path='About' element={<About />} />
      <Route path='LitePapper' element={<LitePapper />} />
      <Route path='RoadMap' element={<RoadMap />} />
      <Route path='Tokenomics' element={<Tokenomics />} />
      <Route path='FAQ' element={<FAQ />} />
    </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  </BrowserRouter>
  )
}

export default App;
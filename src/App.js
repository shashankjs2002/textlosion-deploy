import './components/style.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AdditiveCipherDecrypt from './components/AdditiveCipherDecrypt';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/additive-cipher-decrypt" element={<AdditiveCipherDecrypt/>} />
        </Routes>

      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;

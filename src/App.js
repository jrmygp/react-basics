import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar"
import Band from './components/Band/Band';
import TourSection from './components/TourSection/TourSection';


function App() {
  return (
    <>
    <Navbar />
    <div><Band /></div>
    <div><TourSection /></div>
    </>
  );
}

export default App;

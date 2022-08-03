import './App.css';
import {Navbar} from "./components/Navbar";
import {Mid} from "./components/Mid";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
     <>
     <video autoPlay loop muted inline className='vid'>
      <source src="https://yogamea.com/videos/yogamea-teacher-training-italy-india.mp4" type='video/mp4' />
     </video>
      <Navbar/>
      <Mid/>
     <Footer/>
     </>
    </div>
  );
}

export default App;

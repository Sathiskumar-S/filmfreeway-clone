import './App.css'
import Hero from "./components/Hero/Hero";
import BestFestivals from './components/Ui/BestFestival';
import Reviews from './components/Ui/Reviews';
import TopFestival from './components/Ui/Topfestival';
import Watermark from './components/Ui/Watermark';
import Footer from "./components/Footer/Footer";
import GetStarted from './components/Ui/GetStarted';
function App() {

  return (
   <div>
      <Hero />
      <Watermark />
      <TopFestival/>
      <Reviews />
      <BestFestivals />
      <GetStarted />
      <Footer />
   </div>
  )
}

export default App

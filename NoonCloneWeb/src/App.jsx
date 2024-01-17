// import Card  from './component/Card';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Products/Product';
import Banner from './component/Banner/Banner';
import Electronic from './component/Electronic/Electronic';
import Slider from './component/slider/slider';
import Clearance from './component/Clearance/Clearance';
import Slider2 from './component/slider/Slider2';
import BestSelling from './component/BestSelling/BestSelling';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Navbar/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Product/>
    <Banner/>
    <Electronic/>
    <Clearance/>
    <Slider2/>
    <BestSelling/>
    <Footer/>
    </>
  )
}

export default App;
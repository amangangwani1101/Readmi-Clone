import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Slider from './component/Slider.js'
import pkg from './data/data.json'
import Offers from './component/Offers.js'
import Heading from './component/Heading.js'
import StarProduct from './component/StarProduct.js'
import HotAccessioriesMenu from './component/HotAccessioriesMenu.js'
import HotAccessiories from './component/HotAccessiories.js'
import ProductReview from './component/ProductReview.js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import NavOptions from './component/NavOptions.js'
function App() {

  return (
    <Router>
        <PreNavbar/>
        <Navbar/>
        <NavOptions miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} audio={pkg.audio} accessories={pkg.accessories}/>
        <Slider start={pkg.banner.start}/>
        <Offers offer={pkg.offer}/>
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct = {pkg.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessioriesMenu/>
        <Routes>
          <Route exact path='/music' element={<HotAccessiories music={pkg.hotAccessories.music} musicCover = {pkg.hotAccessoriesCover.music} />}/>            
          <Route exact path='/smartDevice' element={<HotAccessiories smartDevice={pkg.hotAccessories.smartDevice} smartDeviceCover = {pkg.hotAccessoriesCover.smartDevice} />}/>            
          <Route exact path='/home' element={<HotAccessiories home={pkg.hotAccessories.home} homeCover = {pkg.hotAccessoriesCover.home} />}/>            
          <Route exact path='/lifestyle' element={<HotAccessiories lifeStyle={pkg.hotAccessories.lifeStyle} lifeStyleCover = {pkg.hotAccessoriesCover.lifeStyle} />}/>            
          <Route exact path='/mobileAccessories' element={<HotAccessiories mobileAccessories={pkg.hotAccessories.mobileAccessories} mobileAccessoriesCover = {pkg.hotAccessoriesCover.mobileAccessories} />}/>            
        </Routes>
        <Heading text="PRODUCT REVIEWS"/>
        <ProductReview ProductReview={pkg.productReviews}/>
        <Heading text="VIDEOS"/>
        <Videos videos={pkg.videos}/>
        <Heading text="IN THE PRESS"/>
        <Banner banner={pkg.banner}/>
        <Footer footer={pkg.footer}/>
    </Router>
  );
}

export default App;

import './App.css';
import Nav from './Components/header/Nav';
import NewNav from './Components/newNavigation/NewNav';
import MainComponent from './Components/home/MainComponent';
import Footer from './Components/footer/Footer';
import SignIn from './Components/Account/SignIn';
import SignUp from './Components/Account/SignUp';
import InfoProduct from './Components/MoreInfo/InfoProduct'
import BuyNow from './Components/BuyNoww/BuyNow';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
    <Nav/>
    <NewNav/>
    <Routes>
      <Route path="/" element={<MainComponent/>} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/getProductInfo/:id" element={<InfoProduct/>} />
      <Route path="/buynow" element={<BuyNow/>} />
    </Routes>
    <Footer/>
    </>
  ); 
}

export default App;

import {
  AppleMusic,
  AppleTV,
  AppleFitness,
  AppleNews,
  Icloud,
} from "./components/Services/Services";

import {SmallButton, MediumButton, BigButton} from "./components/General/Buttons"
import Footer from "./components/General/Footer";
import Navbar from "./components/General/Navbar";
import Logo from "./components/General/Logo";
import Search from "./components/General/Search";
import Mac from "./components/ShopAndLearn/Mac";
import Iphone from "./components/ShopAndLearn/Iphone";
import Ipad from "./components/ShopAndLearn/Ipad";
import Watch from "./components/ShopAndLearn/Watch";
import Airpods from "./components/ShopAndLearn/Airpods";
import {Accessibility, Education, Environment, InclusionAndDiversity, Privacy,RacialEquityAndJustice, SupplierResponsibility} from "./components/Values/Values"
import {FindAStore, GeniusBar,TodayAtCompany, CompanyCamp, StoreApp, ClearanceAndRefurbished, Financing, TradeIn, OrderStatus, ShoppingHelp} from "./components/Store/Store"
import {NewsRoom, LeaderShip, CareerOpportunities, Investors, EthicsAndCompliance, Events, ContactUs} from "./components/AboutUs/AboutUs"
import ShoppingCart from "./components/ShopAndLearn/ShoppingCart";
import Hello from "./components/General/Hello";

 
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
      <ShoppingCart></ShoppingCart>
      <Logo></Logo>
      <Hello></Hello>
     

      <div>
        <h2>Shop and Learn</h2>
        <Mac></Mac>
        <Ipad></Ipad>
        <Iphone></Iphone>
        <Watch></Watch>
        <Airpods></Airpods>
      </div>

      <div>
        <h2>Service Components</h2>
        <AppleMusic></AppleMusic>
        <AppleTV></AppleTV>
        <AppleFitness></AppleFitness>
        <AppleNews></AppleNews>
        <Icloud></Icloud>
      </div>

      <div>
        <h2>My botton Components</h2>
        <SmallButton></SmallButton>
        <MediumButton></MediumButton>
        <BigButton></BigButton>
      </div>

      <div>
        <h2>Apple Values</h2>
        <Accessibility></Accessibility>
        <Education></Education>
        <Environment></Environment>
        <InclusionAndDiversity></InclusionAndDiversity> 
        <Privacy></Privacy>
        <RacialEquityAndJustice></RacialEquityAndJustice>
        <SupplierResponsibility></SupplierResponsibility>
      </div>

      <div>
        <h2>Store components</h2>
        <FindAStore></FindAStore>
        <GeniusBar></GeniusBar>
        <TodayAtCompany></TodayAtCompany>
        <CompanyCamp></CompanyCamp>
        <StoreApp></StoreApp>
        <ClearanceAndRefurbished></ClearanceAndRefurbished>
        <Financing></Financing>
        <TradeIn></TradeIn>
        <OrderStatus></OrderStatus>
        <ShoppingHelp></ShoppingHelp>
      </div>

      <div>
        <h2>About us components</h2>
        <NewsRoom></NewsRoom>
        <LeaderShip></LeaderShip>
        <CareerOpportunities></CareerOpportunities>
        <Investors></Investors>
        <EthicsAndCompliance></EthicsAndCompliance>
        <Events></Events>
        <ContactUs></ContactUs>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;

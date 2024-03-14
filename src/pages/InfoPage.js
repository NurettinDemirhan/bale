import Contact from "../components/contact/Contact";
import InfoMain from "../components/infomain/InfoMain";
import Navbar from "../components/navbar/Navbar";
import "./HomePage.css";
function InfoPage() {
    return (
      <div className="InfoPage">
        <Navbar/>
        <InfoMain/>
        <Contact/>
      </div>
    );
  }
  
  export default InfoPage;
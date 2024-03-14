import Background from "../components/background/Background";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Photos from "../components/photos/Photos";
import "./HomePage.css";
function HomePage() {
    return (
      <div className="HomePage">
        <Navbar/>
        <Background/>
        <Header/>
        
        <Photos/>
        <Contact/>
      </div>
    );
  }
  
  export default HomePage;
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Moments from "./components/Moments/Moments";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Moments />
      <Footer />
    </div>
  );
}

export default App;

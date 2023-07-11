import "./App.css";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import MainCards from "./components/MainCards";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainCards />
      <Clients />
      <Form />
      <Pricing />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;

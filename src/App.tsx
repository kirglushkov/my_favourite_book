import "./App.css";
import AboutBookBottom from "./components/AboutBookBottom";
import AboutMe from "./components/AboutMe";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer_dir/Footer";
import Header from "./components/Header_dir/Header";
import Header_title from "./components/Header_title";
import Main_body from "./components/Main_body";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <div>
      <Header />
      <Header_title />
      <Main_body />
      <AboutBookBottom />
      <ReviewPage />
      <AboutMe />
      <BuyButton />
      <Footer />
    </div>
  );
}

export default App;

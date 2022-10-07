import Carousel from "./ui/carousel/Carousel";
import Category from "./ui/dropdown/Category";
import Footer from "./ui/footer/Footer";
import Header from "./ui/header/Header";
import Live from "./ui/live/Live";
import LoginAd from "./ui/login/LoginAd";

function App() {
  return (
    <div className="bg-primary-1">
      <Header></Header>
      <main className="mt-16">
        <div className="d-flex justify-content-center pt-4 mx-8">
          <Category></Category>
          <Carousel></Carousel>
          <LoginAd></LoginAd>
        </div>
        <Live></Live>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import Category from "./ui/dropdown/Category";
import Footer from "./ui/footer/Footer";
import Header from "./ui/header/Header";

function App() {
  return (
    <div className="bg-primary-1">
      <Header></Header>
      <main className="mt-16">
        <div className="banner">
          <Category></Category>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

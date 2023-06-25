import Shop from "./components/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>

      <Footer />
    </>
  );
}

export default App;

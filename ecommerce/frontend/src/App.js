import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <HomeScreen /> */}
          <Route path="" element={<HomeScreen />} />
          <Route path="product/:id" element={<ProductScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

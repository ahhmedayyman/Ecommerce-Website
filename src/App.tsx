import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import { productList } from "./data";
import Footer from "./components/Footer";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap gap-3 w-custom mt-4">
          {renderProductList}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto">
       <div className="flex justify-between flex-wrap gap-3 w-custom mt-4">
       <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       </div>
       
      </div>
    </>
  );
};

export default App;

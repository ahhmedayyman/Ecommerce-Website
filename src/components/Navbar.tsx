import { ShoppingBag } from "lucide-react";

const Navbar = () => {

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">StyleStore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Shop</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
          </div>
        </div>
      </div>     
    </nav>
  );
};

export default Navbar;
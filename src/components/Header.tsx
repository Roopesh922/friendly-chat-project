
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">Orange Tree</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-orange-600 font-medium">About Us</Link>
            <div className="relative group">
              <span className="text-gray-700 hover:text-orange-600 font-medium cursor-pointer">Products</span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
                <Link to="/products/living-room" className="block p-2 text-gray-700 hover:bg-orange-50 rounded">Living Room</Link>
                <Link to="/products/bedroom" className="block p-2 text-gray-700 hover:bg-orange-50 rounded">Bedroom</Link>
              </div>
            </div>
            <Link to="/contact-us" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
            <Link to="/blog/sustainable-furniture" className="text-gray-700 hover:text-orange-600 font-medium">Blog</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/products/living-room" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Living Room
            </Link>
            <Link 
              to="/products/bedroom" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bedroom
            </Link>
            <Link 
              to="/contact-us" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/blog/sustainable-furniture" 
              className="block text-gray-700 hover:bg-orange-50 p-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

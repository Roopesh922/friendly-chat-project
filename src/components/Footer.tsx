
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-orange-600 mb-4">Orange Tree</h2>
            <p className="text-gray-600 mb-4">
              Creating beautiful spaces with handcrafted furniture since 1995. Our pieces blend traditional craftsmanship with contemporary design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-100 hover:text-orange-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-100 hover:text-orange-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-100 hover:text-orange-600">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-orange-600">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-600 hover:text-orange-600">About Us</Link></li>
              <li><Link to="/products/living-room" className="text-gray-600 hover:text-orange-600">Products</Link></li>
              <li><Link to="/contact-us" className="text-gray-600 hover:text-orange-600">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/living-room" className="text-gray-600 hover:text-orange-600">Living Room</Link></li>
              <li><Link to="/products/bedroom" className="text-gray-600 hover:text-orange-600">Bedroom</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600">Dining</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600">Office</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest collections and special offers.</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
              />
              <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Orange Tree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

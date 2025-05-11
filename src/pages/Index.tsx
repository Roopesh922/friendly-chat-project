
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">Handcrafted Elegance</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Space with Timeless Furniture</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Every piece tells a story. Our handcrafted furniture combines traditional craftsmanship with contemporary design to create beautiful, functional pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>
        <div className="bg-orange-50 h-40 w-full absolute -bottom-20 z-0"></div>
      </section>

      {/* Categories Preview Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover furniture that perfectly fits your style and transforms your living spaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" 
                alt="Living Room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Living Room</h3>
              <p className="text-gray-600 mb-4">Elegant sofas, coffee tables and more for your living spaces</p>
              <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                <Link to="/products/living-room">View Collection</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop" 
                alt="Bedroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Bedroom</h3>
              <p className="text-gray-600 mb-4">Comfortable beds, nightstands and wardrobes for peaceful sleep</p>
              <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                <Link to="/products/bedroom">View Collection</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop" 
                alt="Dining" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Dining</h3>
              <p className="text-gray-600 mb-4">Beautiful dining tables and chairs for memorable meals</p>
              <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                View Collection
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              At Orange Tree, we believe in creating furniture that reflects our commitment to quality, sustainability, and timeless design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Each piece is carefully handcrafted by skilled artisans using traditional techniques and premium materials.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We use responsibly sourced materials and sustainable practices to minimize our environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Timeless Design</h3>
              <p className="text-gray-600">
                We create pieces that transcend trends, combining classic aesthetics with contemporary functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular pieces, each crafted with meticulous attention to detail
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3, 4].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${item === 1 ? '1538688525198-9b88f6f53126' : 
                              item === 2 ? '1567538913594-6861a873c4aa' : 
                              item === 3 ? '1555041469-a586c61ea9bc' : 
                              '1556228453-efd6c1ff04c6'}?q=80&w=500&auto=format&fit=crop`}
                        alt={`Product ${item}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                      {item % 2 === 0 && (
                        <Badge className="absolute top-2 right-2 bg-orange-600">New</Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{
                        item === 1 ? "Wooden Dining Table" :
                        item === 2 ? "Comfort Lounge Chair" :
                        item === 3 ? "Modern Coffee Table" :
                        "Queen Size Bed Frame"
                      }</h3>
                      <p className="text-gray-500 text-sm mb-2">{
                        item === 1 ? "Dining" :
                        item === 2 ? "Living Room" :
                        item === 3 ? "Living Room" :
                        "Bedroom"
                      }</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-orange-600">${
                          item === 1 ? "1,299" :
                          item === 2 ? "849" :
                          item === 3 ? "599" :
                          "1,499"
                        }</span>
                        <Button variant="outline" size="sm" className="text-xs">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </section>

      {/* Testimonials Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people who have transformed their spaces with Orange Tree furniture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                quote: "The quality of Orange Tree's furniture is exceptional. My clients are always impressed with the craftsmanship and attention to detail."
              },
              {
                name: "David Chen",
                role: "Homeowner",
                quote: "We furnished our entire living room with Orange Tree pieces. Three years later, everything still looks as beautiful as the day we bought it."
              },
              {
                name: "Emily Rodriguez",
                role: "Apartment Dweller",
                quote: "I love that Orange Tree offers pieces that work well in smaller spaces without sacrificing style or comfort."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-300">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-300">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-300">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-300">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-300">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-200 rounded-full mr-3 flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-orange-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-orange-100">
            Explore our collections and find the perfect pieces to make your home truly yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
              Browse Collections
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-orange-700">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const bedroomProducts = [
  {
    id: 1,
    name: "Queen Size Bed Frame",
    description: "Elegant wooden bed frame with headboard and sturdy construction",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Beds",
    tags: ["wooden", "queen size", "elegant"],
    features: [
      "Solid sheesham wood construction",
      "Slatted design for proper air circulation",
      "Elegant headboard with natural grain patterns",
      "Supports up to 400kg weight",
      "Easy assembly"
    ],
    dimensions: {
      width: "160 cm",
      length: "200 cm",
      height: "90 cm"
    },
    inStock: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Wooden Nightstand",
    description: "Compact nightstand with drawer and open shelf for storage",
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1595500038360-8dfdcf859e45?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609798250843-1e6daa96eff5?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Storage",
    tags: ["wooden", "nightstand", "storage"],
    features: [
      "Solid wood construction",
      "One drawer with smooth sliding mechanism",
      "Open shelf for books or decor items",
      "Anti-tipping hardware included",
      "Natural wood finish"
    ],
    dimensions: {
      width: "45 cm",
      depth: "40 cm",
      height: "55 cm"
    },
    inStock: true,
    bestSeller: false
  },
  {
    id: 3,
    name: "Wardrobe with Mirror",
    description: "Spacious wardrobe with multiple compartments and full-length mirror",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1661796428175-a201dd07e67b?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Storage",
    tags: ["wardrobe", "mirror", "storage"],
    features: [
      "Three-door design with full-length mirror",
      "Multiple shelves and hanging rods",
      "Soft-close hinges",
      "Solid wood construction",
      "Adjustable shelving"
    ],
    dimensions: {
      width: "180 cm",
      depth: "60 cm",
      height: "210 cm"
    },
    inStock: false,
    bestSeller: false
  },
  {
    id: 4,
    name: "Upholstered Bench",
    description: "Elegant bedroom bench with padded seat and wooden legs",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614705638374-2fb29529282a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Seating",
    tags: ["bench", "upholstered", "bedroom"],
    features: [
      "Comfortable padded seat with premium upholstery",
      "Solid wood legs for stability",
      "Perfect for end-of-bed seating",
      "Available in multiple fabric options",
      "Easy assembly"
    ],
    dimensions: {
      width: "120 cm",
      depth: "45 cm",
      height: "45 cm"
    },
    inStock: true,
    bestSeller: false
  }
];

const ProductBedroom = () => {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [filteredProducts, setFilteredProducts] = useState(bedroomProducts);

  // Filter function
  const handleFilterChange = (newRange: number[]) => {
    setPriceRange(newRange);
    setFilteredProducts(
      bedroomProducts.filter(
        product => product.price >= newRange[0] && product.price <= newRange[1]
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bedroom Collection</h1>
            <p className="text-gray-600 text-lg mb-8">
              Create a peaceful and stylish sanctuary with our bedroom furniture collection. From elegant bed frames to functional storage solutions, each piece is designed for comfort and durability.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Beds</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Nightstands</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Wardrobes</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Dressers</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Accessories</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
          
          <div className="mb-6">
            <p className="mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
            <Slider 
              defaultValue={[0, 2000]} 
              max={2000} 
              step={50} 
              value={priceRange}
              onValueChange={handleFilterChange}
              className="py-4"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button variant="outline" size="sm" className="text-sm">
              Beds
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              Nightstands
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              Wardrobes
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                {product.bestSeller && (
                  <Badge className="absolute top-2 right-2 bg-orange-600">Best Seller</Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold px-4 py-2 bg-gray-900 bg-opacity-75 rounded">Out of Stock</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-orange-600 text-xl">${product.price}</span>
                  <Button 
                    variant={product.inStock ? "default" : "outline"} 
                    disabled={!product.inStock}
                    className={product.inStock ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    {product.inStock ? "Add to Cart" : "Notify Me"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Product Detail */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Product</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <img 
                src={bedroomProducts[0].images[0]} 
                alt={bedroomProducts[0].name} 
                className="w-full rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={bedroomProducts[0].images[1]} 
                  alt={`${bedroomProducts[0].name} detail`} 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="bg-orange-200 rounded-lg flex items-center justify-center p-4 shadow-md">
                  <div className="text-center">
                    <p className="font-semibold text-orange-800">Durable</p>
                    <p className="text-orange-700 text-sm">Solid wood construction for years of use</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Badge className="mb-2 bg-orange-600">Best Seller</Badge>
              <h3 className="text-2xl font-bold mb-2">{bedroomProducts[0].name}</h3>
              <p className="text-orange-600 text-xl font-semibold mb-4">${bedroomProducts[0].price}</p>
              <p className="text-gray-600 mb-6">
                {bedroomProducts[0].description}
              </p>
              
              <Tabs defaultValue="features" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                  <TabsTrigger value="care">Care Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="space-y-2">
                  <ul className="space-y-2">
                    {bedroomProducts[0].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="dimensions">
                  <div className="space-y-2">
                    <p><strong>Width:</strong> {bedroomProducts[0].dimensions.width}</p>
                    <p><strong>Length:</strong> {bedroomProducts[0].dimensions.length}</p>
                    <p><strong>Height:</strong> {bedroomProducts[0].dimensions.height}</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Please allow for a 1-2 cm variance in measurements as each piece is handcrafted.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="care">
                  <div className="space-y-2">
                    <p><strong>Cleaning:</strong> Dust regularly with a soft, dry cloth. Use wood polish every few months.</p>
                    <p><strong>Protection:</strong> Use coasters for drinks and avoid placing hot items directly on the surface.</p>
                    <p><strong>Maintenance:</strong> Periodically check and tighten any loose bolts or screws.</p>
                    <p><strong>Environment:</strong> Keep wooden furniture away from direct sunlight and heat sources to prevent cracking or warping.</p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 flex-grow">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    Add to Wishlist
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Free delivery within city limits. Sizes available: Single, Queen, and King.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bedroom Design Tips */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Bedroom Design Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop" 
                alt="Bedroom design inspiration" 
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Create a Peaceful Retreat</h3>
              <p className="text-gray-600">
                Your bedroom should be a sanctuary for rest and relaxation. Choose calming colors, 
                minimize clutter, and invest in quality bedding for the best sleep experience. 
                Consider adding soft lighting options and keeping electronics to a minimum.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1617325710236-4a36d46427a5?q=80&w=600&auto=format&fit=crop" 
                alt="Storage solutions" 
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Smart Storage Solutions</h3>
              <p className="text-gray-600">
                Maximize your bedroom space with thoughtful storage solutions. Consider beds with 
                built-in drawers, nightstands with shelving, and wardrobes designed to organize 
                your belongings efficiently. Keep daily essentials accessible and occasional 
                items tucked away.
              </p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Creating the Perfect Bedroom Layout</h3>
            <p className="text-gray-600 mb-4">
              The right furniture arrangement can transform your bedroom into a harmonious space.
              Here are some tips to consider:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Position your bed as the focal point, usually against the largest wall.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ensure there's walking space around three sides of the bed for easy access.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Balance the room with nightstands on both sides of the bed.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keep taller furniture pieces against walls to avoid disrupting flow.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consider a seating area if space permits for added functionality.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Vikram P.",
                rating: 5,
                review: "We purchased the Queen Size Bed Frame for our master bedroom and couldn't be happier. The quality is exceptional, and the assembly was straightforward. Highly recommend!",
                product: "Queen Size Bed Frame",
                date: "January 3, 2023"
              },
              {
                name: "Sneha T.",
                rating: 5,
                review: "The wooden nightstand perfectly complements our bed frame. It's sturdy, well-crafted, and the natural wood grain is beautiful. Very pleased with this purchase.",
                product: "Wooden Nightstand",
                date: "February 18, 2023"
              },
              {
                name: "Arjun K.",
                rating: 4,
                review: "The upholstered bench is a great addition to our bedroom. Comfortable seating and excellent build quality. The only reason for 4 stars is that the color is slightly different than what was shown online.",
                product: "Upholstered Bench",
                date: "March 22, 2023"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-orange-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">Purchased: {review.product}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Complementary Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Complete Your Bedroom</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          These complementary items will help you create a coordinated and functional bedroom space.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              name: "Organic Cotton Bedding",
              price: 199,
              image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Bedside Table Lamp",
              price: 89,
              image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Decorative Wall Mirror",
              price: 149,
              image: "https://images.unsplash.com/photo-1616046386594-c152babc9e15?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Storage Ottoman",
              price: 129,
              image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=400&auto=format&fit=crop"
            }
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-orange-600">${item.price}</span>
                  <Button size="sm" variant="outline">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductBedroom;

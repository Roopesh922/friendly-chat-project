
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const livingRoomProducts = [
  {
    id: 1,
    name: "Modern Fabric Sofa",
    description: "A comfortable 3-seater sofa with plush cushions and sturdy wooden frame",
    price: 1599,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Sofa",
    tags: ["comfortable", "modern", "fabric"],
    features: [
      "Solid wood frame for durability",
      "High-density foam cushions for comfort",
      "Stain-resistant fabric upholstery",
      "Available in multiple colors",
      "Removable and washable covers"
    ],
    dimensions: {
      width: "220 cm",
      depth: "90 cm",
      height: "85 cm"
    },
    inStock: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Wooden Coffee Table",
    description: "Elegant coffee table with storage shelf and solid wood construction",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a694?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Tables",
    tags: ["wooden", "storage", "living room"],
    features: [
      "Made from solid sheesham wood",
      "Natural wood grain finish",
      "Lower shelf for storage",
      "Sturdy construction",
      "Hand-finished by skilled artisans"
    ],
    dimensions: {
      width: "120 cm",
      depth: "70 cm",
      height: "45 cm"
    },
    inStock: true,
    bestSeller: false
  },
  {
    id: 3,
    name: "Accent Armchair",
    description: "Comfortable accent chair with wooden legs and premium upholstery",
    price: 649,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549187541-f8a7d783eadf?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Chairs",
    tags: ["comfortable", "accent", "fabric"],
    features: [
      "Ergonomic design for proper posture",
      "High-quality fabric upholstery",
      "Solid wood legs for stability",
      "Perfect for reading corner or living room",
      "Available in multiple colors"
    ],
    dimensions: {
      width: "75 cm",
      depth: "80 cm",
      height: "90 cm"
    },
    inStock: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "Entertainment Unit",
    description: "Modern TV unit with ample storage and cable management system",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Storage",
    tags: ["tv unit", "storage", "modern"],
    features: [
      "Multiple storage compartments",
      "Built-in cable management system",
      "Soft-close drawers",
      "Solid wood construction",
      "Contemporary design"
    ],
    dimensions: {
      width: "180 cm",
      depth: "45 cm",
      height: "60 cm"
    },
    inStock: false,
    bestSeller: false
  }
];

const ProductLivingRoom = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Living Room Collection</h1>
            <p className="text-gray-600 text-lg mb-8">
              Transform your living space with our thoughtfully designed and expertly crafted furniture. Each piece combines comfort, functionality, and timeless style.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Sofas</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Coffee Tables</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Chairs</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Storage</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Decor</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {livingRoomProducts.map((product) => (
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
                src={livingRoomProducts[0].images[0]} 
                alt={livingRoomProducts[0].name} 
                className="w-full rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={livingRoomProducts[0].images[1]} 
                  alt={`${livingRoomProducts[0].name} detail`} 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="bg-orange-200 rounded-lg flex items-center justify-center p-4 shadow-md">
                  <div className="text-center">
                    <p className="font-semibold text-orange-800">Comfortable</p>
                    <p className="text-orange-700 text-sm">High-density foam for ultimate comfort</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Badge className="mb-2 bg-orange-600">Best Seller</Badge>
              <h3 className="text-2xl font-bold mb-2">{livingRoomProducts[0].name}</h3>
              <p className="text-orange-600 text-xl font-semibold mb-4">${livingRoomProducts[0].price}</p>
              <p className="text-gray-600 mb-6">
                {livingRoomProducts[0].description}
              </p>
              
              <Tabs defaultValue="features" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                  <TabsTrigger value="care">Care Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="space-y-2">
                  <ul className="space-y-2">
                    {livingRoomProducts[0].features.map((feature, index) => (
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
                    <p><strong>Width:</strong> {livingRoomProducts[0].dimensions.width}</p>
                    <p><strong>Depth:</strong> {livingRoomProducts[0].dimensions.depth}</p>
                    <p><strong>Height:</strong> {livingRoomProducts[0].dimensions.height}</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Please allow for a 1-2 cm variance in measurements as each piece is handcrafted.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="care">
                  <div className="space-y-2">
                    <p><strong>Cleaning:</strong> Vacuum regularly with an upholstery attachment. Spot clean with a mild water-based solvent.</p>
                    <p><strong>Protection:</strong> Keep away from direct sunlight to prevent fabric fading.</p>
                    <p><strong>Maintenance:</strong> Fluff cushions regularly to maintain shape and comfort.</p>
                    <p><strong>Covers:</strong> Machine wash removable covers in cold water on a gentle cycle.</p>
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
                  Free delivery within city limits. 14-day return policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Living Room Furniture */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Living Room Furniture</h2>
          <p className="text-gray-600">
            We blend traditional craftsmanship with contemporary design to create pieces that elevate your living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
            <p className="text-gray-600">
              We use only the finest materials, including solid hardwoods, top-grain leathers, and premium fabrics.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600">
              Each piece is handcrafted by skilled artisans with generations of woodworking experience.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Long-lasting Quality</h3>
            <p className="text-gray-600">
              Our furniture is built to last for generations, not just seasons, with proper care and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Anita S.",
                rating: 5,
                review: "The Modern Fabric Sofa is exactly what my living room needed. It's comfortable, well-made, and looks much more expensive than it is. The delivery team was also very professional.",
                product: "Modern Fabric Sofa",
                date: "March 15, 2023"
              },
              {
                name: "Rahul M.",
                rating: 4,
                review: "I love my new wooden coffee table! The craftsmanship is excellent, and it pairs perfectly with my existing furniture. Took off one star because delivery took a bit longer than expected.",
                product: "Wooden Coffee Table",
                date: "February 2, 2023"
              },
              {
                name: "Priya K.",
                rating: 5,
                review: "The accent armchair is not only beautiful but also incredibly comfortable. I've received so many compliments on it. Orange Tree's customer service was also excellent when I had questions.",
                product: "Accent Armchair",
                date: "April 10, 2023"
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

      {/* Related Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Related Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Bedroom Collection",
              image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=500&auto=format&fit=crop",
              link: "/products/bedroom"
            },
            {
              name: "Dining Collection",
              image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=500&auto=format&fit=crop",
              link: "/"
            },
            {
              name: "Home Office Collection",
              image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=500&auto=format&fit=crop",
              link: "/"
            }
          ].map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductLivingRoom;

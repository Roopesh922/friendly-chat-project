
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-2 bg-orange-200 text-orange-800 hover:bg-orange-300">Design Tips</Badge>
              <h1 className="text-4xl font-bold mb-4">5 Interior Design Tips for Small Spaces: Maximize Your Home</h1>
              <div className="flex items-center text-gray-500 text-sm">
                <span>By Priya Patel</span>
                <span className="mx-2">•</span>
                <span>April 18, 2023</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop" 
              alt="Small apartment living room" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <article className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Living in a compact space doesn't mean sacrificing style or functionality. With some strategic planning and thoughtful design choices, even the smallest rooms can become beautiful, comfortable, and efficient. Here are five expert interior design tips to help you make the most of your small space.
              </p>
              
              <h2>1. Choose Multi-functional Furniture</h2>
              <p>
                When space is at a premium, every piece of furniture should earn its keep. Look for items that serve multiple purposes or can transform to meet different needs:
              </p>
              <ul>
                <li><strong>Sofa beds or daybeds</strong> that provide seating during the day and sleeping space at night</li>
                <li><strong>Coffee tables with storage</strong> inside to hide away books, remote controls, and other items</li>
                <li><strong>Extendable dining tables</strong> that can accommodate extra guests when needed but remain compact for daily use</li>
                <li><strong>Ottomans with hidden storage</strong> that can serve as seating, footrests, or even casual tables</li>
                <li><strong>Nesting tables</strong> that can be spread out when needed and tucked away when not in use</li>
              </ul>
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop" 
                  alt="Multi-functional furniture" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">A stylish living room with multi-functional furniture pieces</p>
              </div>
              
              <p>
                At Orange Tree, our compact living collection features beautifully crafted multi-functional pieces designed specifically for smaller homes. Our popular storage bed frames, for instance, offer ample drawer space underneath without sacrificing style.
              </p>
              
              <h2>2. Create Visual Space with Mirrors and Light</h2>
              <p>
                Strategic use of mirrors and lighting can make a small room feel significantly larger:
              </p>
              <ul>
                <li><strong>Place mirrors opposite windows</strong> to reflect natural light and create the illusion of more space</li>
                <li><strong>Use multiple light sources</strong> instead of relying on one overhead fixture</li>
                <li><strong>Consider wall-mounted sconces</strong> to free up table space that would otherwise be taken by lamps</li>
                <li><strong>Install floor-to-ceiling mirrors</strong> to visually double the size of a room</li>
                <li><strong>Choose furniture with reflective surfaces</strong> like glass or polished metals</li>
              </ul>
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?q=80&w=1000&auto=format&fit=crop" 
                  alt="Room with strategic mirror placement" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Notice how the mirror expands the visual space of this compact room</p>
              </div>
              
              <h2>3. Embrace Vertical Space</h2>
              <p>
                When floor space is limited, the key is to think upward:
              </p>
              <ul>
                <li><strong>Install floating shelves</strong> to display decorative items without consuming floor space</li>
                <li><strong>Use tall bookcases</strong> that extend toward the ceiling to maximize storage</li>
                <li><strong>Hang curtains from ceiling to floor</strong> to create the illusion of height</li>
                <li><strong>Consider a loft bed</strong> in extremely small spaces to utilize the area underneath for a desk or seating</li>
                <li><strong>Mount TVs on the wall</strong> instead of using entertainment centers</li>
              </ul>
              
              <p>
                Our wall-mounted storage systems are particularly popular among apartment dwellers. These modular units can be configured to fit any space, providing both functional storage and visual interest without cluttering the floor.
              </p>
              
              <h2>4. Choose a Cohesive Color Scheme</h2>
              <p>
                Color plays a crucial role in the perception of space. A thoughtful color scheme can make a small room feel more open and cohesive:
              </p>
              <ul>
                <li><strong>Opt for a monochromatic color scheme</strong> with varying shades of the same color to create depth without visual interruption</li>
                <li><strong>Use light colors</strong> for walls and larger furniture pieces to reflect light</li>
                <li><strong>Create continuity</strong> by using the same flooring throughout connected spaces</li>
                <li><strong>Consider painting walls and trim the same color</strong> to eliminate visual breaks</li>
                <li><strong>Add pops of color through accessories</strong> that can be easily changed</li>
              </ul>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Small room with cohesive color scheme" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">A cohesive color palette makes this compact space feel harmonious</p>
              </div>
              
              <p>
                For small spaces, we often recommend our natural finish furniture that brings warmth without overwhelming the room. The light wood tones in our Minimalist Collection work particularly well in compact areas.
              </p>
              
              <h2>5. Be Mindful of Scale and Proportion</h2>
              <p>
                Choosing appropriately sized furniture is perhaps the most important aspect of designing for small spaces:
              </p>
              <ul>
                <li><strong>Select furniture that fits the scale of your room</strong> - avoid oversized pieces that dominate the space</li>
                <li><strong>Consider apartment-sized sofas</strong> that offer comfort without overwhelming the room</li>
                <li><strong>Choose chairs with open arms or no arms</strong> to reduce visual bulk</li>
                <li><strong>Look for pieces with exposed legs</strong> that create a sense of airiness</li>
                <li><strong>Avoid heavy, bulky furniture</strong> that makes the space feel cramped</li>
              </ul>
              
              <p>
                Our Urban Compact line is specifically designed with smaller spaces in mind. These pieces maintain all the style and comfort of our regular furniture but with dimensions that work better in apartments and smaller homes.
              </p>
              
              <h2>Bringing It All Together: A Case Study</h2>
              <p>
                Let's look at how these principles transformed a real 450-square-foot studio apartment:
              </p>
              
              <div className="my-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=500&auto=format&fit=crop" 
                      alt="Studio apartment before" 
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-1 text-center">Before: Cluttered and cramped</p>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop" 
                      alt="Studio apartment after" 
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-1 text-center">After: Open and functional</p>
                  </div>
                </div>
              </div>
              
              <p>
                This transformation involved:
              </p>
              <ul>
                <li>A wall-mounted TV with floating media shelf instead of a bulky entertainment center</li>
                <li>A sofa bed with built-in storage beneath the cushions</li>
                <li>A round dining table with nesting chairs that can be tucked away when not in use</li>
                <li>Wall-mounted shelving to display books and decorative items</li>
                <li>A cohesive white and natural wood color scheme throughout</li>
                <li>Strategic mirror placement to reflect the window light</li>
              </ul>
              
              <h2>Conclusion</h2>
              <p>
                Living in a small space doesn't mean sacrificing style or comfort. With thoughtful planning and strategic design choices, even the most compact homes can feel spacious, functional, and beautiful. At Orange Tree, we're committed to helping our customers find perfect furniture solutions regardless of their space constraints.
              </p>
              <p>
                Visit our showroom to see our small-space solutions in person, or browse our Apartment Living collection online for pieces specifically designed for compact living.
              </p>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Beautifully designed small living room" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">A beautifully designed small space using our furniture pieces</p>
              </div>
              
              <p>
                Remember that designing for a small space is all about being intentional with every choice. Each piece should serve a purpose, contribute to the overall aesthetic, and ideally provide multiple functions. With these principles in mind, you can create a home that feels spacious and welcoming, no matter its actual dimensions.
              </p>
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-orange-50 rounded-lg">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-200 rounded-full mr-4 flex items-center justify-center">
                  PP
                </div>
                <div>
                  <h3 className="font-bold text-lg">Priya Patel</h3>
                  <p className="text-orange-600">Head Designer</p>
                  <p className="text-gray-600 mt-2">
                    Priya has been with Orange Tree for over 8 years, bringing her expertise in interior design and space optimization to our collections. She holds a degree in Interior Architecture and specializes in creating beautiful, functional solutions for urban living spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 flex items-center justify-between">
              <div className="text-gray-600">Share this article:</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-24">
              {/* Search */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <Button className="absolute right-1 top-1 h-8 w-8 p-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=200&auto=format&fit=crop" 
                      alt="Sustainable Furniture" 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">
                        <Link to="/blog/sustainable-furniture">The Art of Sustainable Furniture: Creating Beauty That Lasts</Link>
                      </h4>
                      <p className="text-xs text-gray-500">May 5, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop" 
                      alt="Wood care" 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">Essential Wood Care Tips for Longevity</h4>
                      <p className="text-xs text-gray-500">March 27, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=200&auto=format&fit=crop" 
                      alt="Color trends" 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">2023 Color Trends for Home Furniture</h4>
                      <p className="text-xs text-gray-500">February 12, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Design Tips</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Sustainability</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Product Care</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Furniture History</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Behind the Scenes</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Craftsmanship</Badge>
                </div>
              </div>

              {/* Featured Products */}
              <div>
                <h3 className="font-bold text-lg mb-4">Perfect for Small Spaces</h3>
                <Card className="overflow-hidden border-none shadow-md mb-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=500&auto=format&fit=crop" 
                      alt="Compact Armchair" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">Compact Accent Armchair</h4>
                    <p className="text-gray-600 text-sm mb-2">Perfect for small living rooms</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-600">$649</span>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">Shop Now</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500&auto=format&fit=crop" 
                      alt="Nesting Tables" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">Nesting Side Tables</h4>
                    <p className="text-gray-600 text-sm mb-2">Space-saving and versatile</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-600">$349</span>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">Shop Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">More Design Tips & Inspiration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=500&auto=format&fit=crop" 
                  alt="Sustainable Furniture" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gray-800">Sustainability</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  <Link to="/blog/sustainable-furniture">The Art of Sustainable Furniture: Creating Beauty That Lasts</Link>
                </h3>
                <p className="text-gray-500 text-sm mb-2">May 5, 2023</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Explore how sustainable practices are shaping the future of furniture design and how you can make eco-friendly choices for your home.
                </p>
                <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                  <Link to="/blog/sustainable-furniture">Read Article</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=500&auto=format&fit=crop" 
                  alt="Wood care" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gray-800">Product Care</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Essential Wood Care Tips for Longevity</h3>
                <p className="text-gray-500 text-sm mb-2">March 27, 2023</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Learn how to properly care for your wooden furniture to ensure it remains beautiful and functional for generations to come.
                </p>
                <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=500&auto=format&fit=crop" 
                  alt="Bedroom design" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gray-800">Design Tips</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Creating a Peaceful Bedroom Retreat</h3>
                <p className="text-gray-500 text-sm mb-2">January 30, 2023</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Discover how to transform your bedroom into a tranquil sanctuary with the right furniture placement, colors, and accessories.
                </p>
                <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Consultation CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-orange-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Your Small Space?</h2>
          <p className="mb-6 text-orange-100">
            Our design consultants can help you select the perfect furniture for your compact living space. Schedule a free consultation today.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost2;

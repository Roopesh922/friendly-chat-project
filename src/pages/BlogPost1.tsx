
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-2 bg-orange-200 text-orange-800 hover:bg-orange-300">Sustainability</Badge>
              <h1 className="text-4xl font-bold mb-4">The Art of Sustainable Furniture: Creating Beauty That Lasts</h1>
              <div className="flex items-center text-gray-500 text-sm">
                <span>By Anjali Desai</span>
                <span className="mx-2">•</span>
                <span>May 5, 2023</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200&auto=format&fit=crop" 
              alt="Sustainable wood workshop" 
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
                At Orange Tree, sustainability isn't just a buzzword—it's a core value that guides every aspect of our furniture creation process. From sourcing materials to crafting techniques and finishing touches, we're committed to producing beautiful pieces that are kind to the planet.
              </p>
              
              <h2>The Importance of Sustainable Furniture</h2>
              <p>
                The furniture industry has historically had a significant environmental footprint. Conventional furniture production often involves deforestation, high carbon emissions, toxic chemicals, and waste that ends up in landfills. As awareness grows about climate change and environmental degradation, more consumers are seeking sustainable alternatives that align with their values.
              </p>
              <p>
                Sustainable furniture focuses on minimizing environmental impact throughout the entire lifecycle of a piece—from the responsibly sourced raw materials to its eventual biodegradability or recyclability at the end of its useful life.
              </p>
              
              <h2>Our Sustainable Practices</h2>
              <p>
                At Orange Tree, sustainability is woven into every step of our furniture creation process:
              </p>
              <h3>1. Responsible Material Sourcing</h3>
              <p>
                We source our wood exclusively from FSC-certified forests, ensuring that for every tree harvested, new ones are planted. These forests are managed according to strict environmental, social, and economic standards. We also use reclaimed wood whenever possible, giving new life to timber with a previous history.
              </p>
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1611021061271-d13ab0eefe38?q=80&w=1000&auto=format&fit=crop" 
                  alt="Responsibly sourced wood" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Our craftsmen carefully select sustainable wood for each piece</p>
              </div>
              <h3>2. Low-Impact Manufacturing</h3>
              <p>
                Our workshop is designed to minimize energy consumption through efficient machinery and natural lighting. We've invested in solar panels that power a significant portion of our operations, reducing our carbon footprint. Water-based, non-toxic finishes and adhesives are used to ensure our furniture is safe for both your home and the environment.
              </p>
              <h3>3. Zero-Waste Philosophy</h3>
              <p>
                We implement strategies to minimize waste at every stage. Wood scraps are repurposed into smaller products or used as biofuel to heat our workshop during winter. Sawdust is collected and provided to local farmers for animal bedding or composting. Our packaging is minimal, recyclable, and often made from recycled materials.
              </p>
              
              <h2>Benefits of Sustainable Furniture</h2>
              <p>
                Choosing sustainably crafted furniture offers multiple benefits:
              </p>
              <ul>
                <li>
                  <strong>Environmental Impact:</strong> Reduces deforestation, pollution, and carbon emissions associated with furniture production.
                </li>
                <li>
                  <strong>Health Benefits:</strong> Non-toxic finishes mean no harmful VOCs (volatile organic compounds) off-gassing in your home.
                </li>
                <li>
                  <strong>Durability:</strong> Sustainably crafted furniture is typically built to last, reducing the need for frequent replacements.
                </li>
                <li>
                  <strong>Unique Character:</strong> Each piece carries the natural beauty of its materials and the story of its responsible creation.
                </li>
                <li>
                  <strong>Social Responsibility:</strong> Supports fair labor practices and communities that depend on responsible forestry.
                </li>
              </ul>
              
              <h2>The Timeless Quality of Sustainable Design</h2>
              <p>
                Perhaps the most sustainable aspect of our furniture is its timeless design. We create pieces that transcend trends, meant to be cherished for generations rather than discarded when styles change. This approach not only reduces waste but also allows furniture to become more meaningful over time, developing a patina and character that tells the story of your life.
              </p>
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Timeless wooden furniture" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Our designs focus on timeless aesthetics that won't go out of style</p>
              </div>
              
              <h2>How to Care for Your Sustainable Furniture</h2>
              <p>
                Maintenance is a crucial aspect of sustainability. Here are some tips for extending the life of your wooden furniture:
              </p>
              <ul>
                <li>Dust regularly with a soft cloth to prevent buildup that can scratch surfaces.</li>
                <li>Keep wooden furniture away from direct sunlight to prevent fading and drying.</li>
                <li>Maintain optimal humidity levels to prevent wood from cracking or warping.</li>
                <li>Use coasters for drinks and trivets for hot items to protect surfaces.</li>
                <li>Apply natural wood polish or oil every 3-6 months to nourish the wood.</li>
                <li>Address spills immediately to prevent staining or water damage.</li>
              </ul>
              
              <h2>Looking Forward: Our Sustainability Goals</h2>
              <p>
                While we're proud of our current practices, we recognize that sustainability is a journey of continuous improvement. Our goals for the future include:
              </p>
              <ul>
                <li>Achieving carbon neutrality across all operations by 2025.</li>
                <li>Developing innovative ways to use agricultural waste materials in our furniture.</li>
                <li>Implementing a furniture take-back program to ensure responsible end-of-life handling.</li>
                <li>Sharing our sustainable practices with other manufacturers to create broader industry change.</li>
              </ul>
              
              <h2>Conclusion</h2>
              <p>
                Sustainable furniture represents a thoughtful approach to home furnishing—one that considers the impact of our choices on the planet and future generations. At Orange Tree, we believe that beautiful design and environmental responsibility can go hand in hand. When you choose our furniture, you're not just enhancing your living space; you're participating in a movement toward a more sustainable and conscious approach to consumption.
              </p>
              <p>
                We invite you to visit our showroom to experience firsthand how sustainability and luxury can coexist beautifully in your home.
              </p>
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-orange-50 rounded-lg">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-200 rounded-full mr-4 flex items-center justify-center">
                  AD
                </div>
                <div>
                  <h3 className="font-bold text-lg">Anjali Desai</h3>
                  <p className="text-orange-600">Sustainability Officer</p>
                  <p className="text-gray-600 mt-2">
                    Anjali leads Orange Tree's sustainability initiatives, ensuring our commitment to eco-friendly practices throughout our supply chain and operations. She holds a Master's degree in Environmental Management and has over 10 years of experience in sustainable business practices.
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
                      src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=200&auto=format&fit=crop" 
                      alt="Interior Design Tips" 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-sm"><Link to="/blog/interior-design-tips">5 Interior Design Tips for Small Spaces</Link></h4>
                      <p className="text-xs text-gray-500">April 18, 2023</p>
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
                  <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Sustainability</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Design Tips</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Product Care</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Furniture History</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Behind the Scenes</Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Craftsmanship</Badge>
                </div>
              </div>

              {/* Featured Product */}
              <div>
                <h3 className="font-bold text-lg mb-4">Featured Product</h3>
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500&auto=format&fit=crop" 
                      alt="Sustainable Sofa" 
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-orange-600">New</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">Eco-Friendly Fabric Sofa</h4>
                    <p className="text-gray-600 text-sm mb-2">Made with sustainable materials and natural fabrics</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-600">$1,499</span>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">View Details</Button>
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
          <h2 className="text-3xl font-bold mb-12 text-center">You Might Also Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=500&auto=format&fit=crop" 
                  alt="Interior Design Tips" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gray-800">Design Tips</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1"><Link to="/blog/interior-design-tips">5 Interior Design Tips for Small Spaces</Link></h3>
                <p className="text-gray-500 text-sm mb-2">April 18, 2023</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Maximize your small living spaces with these clever design strategies that create the illusion of space without sacrificing style or comfort.
                </p>
                <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                  <Link to="/blog/interior-design-tips">Read Article</Link>
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
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=500&auto=format&fit=crop" 
                  alt="Color trends" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gray-800">Design Trends</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">2023 Color Trends for Home Furniture</h3>
                <p className="text-gray-500 text-sm mb-2">February 12, 2023</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Explore this year's trending colors for furniture and home decor, and learn how to incorporate them into your existing space.
                </p>
                <Button variant="link" className="p-0 text-orange-600 hover:text-orange-800">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-orange-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="text-gray-600 mb-6">
            Get the latest articles, design tips, and exclusive offers delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost1;


import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crafting Beauty Since 1995</h1>
            <p className="text-gray-600 text-lg">
              At Orange Tree, we believe that furniture is more than just functional—it's an expression of who you are and how you live. Our journey from a small workshop to a loved furniture brand has been guided by passion, craftsmanship, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
              alt="Craftsman working on furniture" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">The Beginning</h2>
            <p className="text-gray-600 mb-4">
              Orange Tree was founded in 1995 by Rajesh Sharma, a master craftsman with a vision to blend traditional Indian woodworking techniques with contemporary design sensibilities. What began as a small workshop in Jodhpur has grown into a recognized name in handcrafted furniture.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder's philosophy was simple: create beautiful, functional pieces that tell a story and stand the test of time. This philosophy continues to guide everything we do today.
            </p>
            <p className="text-gray-600">
              The name "Orange Tree" was inspired by the beautiful orange trees that surrounded our first workshop—symbolizing growth, beauty, and the organic nature of our craft.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To create beautiful, sustainable furniture that enhances the way people live, work, and connect with their spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on materials or craftsmanship. Every piece that leaves our workshop meets our exacting standards for durability, functionality, and beauty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to responsible sourcing, minimal waste, and creating furniture that lasts for generations—not seasons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                While honoring traditional techniques, we continuously explore new designs, materials, and methods to meet evolving lifestyles and spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-semibold mb-2">1995</div>
                <h3 className="text-xl font-bold mb-2">The Beginning</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Orange Tree was founded in Jodhpur, Rajasthan, with a small team of skilled artisans.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-semibold mb-2">2005</div>
                <h3 className="text-xl font-bold mb-2">First Flagship Store</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  We opened our first flagship store in Mumbai, bringing our handcrafted pieces to a wider audience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-semibold mb-2">2012</div>
                <h3 className="text-xl font-bold mb-2">Sustainability Initiative</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Launched our comprehensive sustainability program, committing to responsible wood sourcing and zero waste manufacturing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-semibold mb-2">2018</div>
                <h3 className="text-xl font-bold mb-2">Design Excellence Award</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Received the prestigious National Design Excellence Award for our innovative fusion of traditional craft and modern design.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-800 inline-block px-4 py-1 rounded-full font-semibold mb-2">Today</div>
                <h3 className="text-xl font-bold mb-2">Growing Globally</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  With stores across India and an international online presence, we continue to share our passion for beautifully crafted furniture with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines master craftsmen, innovative designers, and passionate furniture enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
                bio: "With over 30 years of experience in furniture craftsmanship, Rajesh continues to guide our creative vision."
              },
              {
                name: "Priya Patel",
                role: "Head Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                bio: "Priya brings contemporary design sensibility while honoring traditional techniques in all our collections."
              },
              {
                name: "Vikram Singh",
                role: "Master Craftsman",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
                bio: "With his exceptional skill, Vikram leads our workshop and trains the next generation of artisans."
              },
              {
                name: "Anjali Desai",
                role: "Sustainability Officer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
                bio: "Anjali ensures our commitment to sustainable practices throughout our supply chain and operations."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Unique Approach</h2>
            <p className="text-gray-600 mb-6">
              What sets Orange Tree apart is our commitment to blending traditional craftsmanship with contemporary design. We believe that the best furniture has a story to tell—one that connects the maker to the user.
            </p>
            <p className="text-gray-600 mb-6">
              Each piece in our collection is designed with intention, crafted with care, and created to enhance the way you live in your space. We don't follow trends; we create timeless pieces that evolve with you.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Handcrafted by skilled artisans</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sustainably sourced materials</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Focus on ergonomics and comfort</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Timeless designs that transcend trends</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=400&auto=format&fit=crop" 
              alt="Woodworking" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1565193298442-2373bcb29cd4?q=80&w=400&auto=format&fit=crop" 
              alt="Finished furniture" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=400&auto=format&fit=crop" 
              alt="Workshop" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=400&auto=format&fit=crop" 
              alt="Design process" 
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

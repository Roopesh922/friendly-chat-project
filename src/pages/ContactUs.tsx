
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Form schema validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions, feedback, or need assistance with your furniture purchase? 
              We're here to help! Reach out to our friendly team using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 11234 56789</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@orangetree.in</p>
              <p className="text-gray-600">support@orangetree.in</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Furniture Lane</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: 11:00 AM - 6:00 PM</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this regarding?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription>
                        Please provide as much detail as possible so we can best assist you.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-orange-600 hover:bg-orange-700 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Map and Locations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
            
            <div className="bg-gray-200 h-80 mb-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2">
                  <MapPin className="h-10 w-10 text-orange-600 mx-auto" />
                </div>
                <p className="text-gray-600">Interactive map would be displayed here</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Mumbai Flagship Store</h3>
                <p className="text-gray-600">123 Furniture Lane, Mumbai, Maharashtra 400001</p>
                <p className="text-gray-600 text-sm mt-1">Phone: +91 98765 43210</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Delhi Showroom</h3>
                <p className="text-gray-600">456 Design Street, Delhi, 110001</p>
                <p className="text-gray-600 text-sm mt-1">Phone: +91 12345 67890</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Bangalore Experience Center</h3>
                <p className="text-gray-600">789 Creative Avenue, Bangalore, 560001</p>
                <p className="text-gray-600 text-sm mt-1">Phone: +91 98761 23450</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is the delivery timeframe for furniture?",
                  answer: "Delivery timeframes vary based on your location and product availability. Generally, in-stock items are delivered within 7-10 business days in metropolitan areas, and 10-15 business days for other locations."
                },
                {
                  question: "Do you offer assembly services?",
                  answer: "Yes, we provide professional assembly services for all our furniture. The assembly fee varies by product and will be communicated during checkout."
                },
                {
                  question: "What is your return policy?",
                  answer: "We offer a 14-day return policy for unused and unopened items in their original packaging. Custom-made items cannot be returned unless there is a manufacturing defect."
                },
                {
                  question: "How do I care for my wooden furniture?",
                  answer: "We recommend dusting regularly with a soft cloth, avoiding direct sunlight, using coasters for drinks, and applying wood polish every 3-6 months to maintain the finish."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Currently, we only ship within India. We're working on expanding our shipping options to international locations in the near future."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-orange-600 rounded-xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Showroom</h2>
          <p className="max-w-2xl mx-auto mb-8 text-orange-100">
            Experience our furniture collections in person. Our design consultants are ready to help you find the perfect pieces for your home.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
            Book a Showroom Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

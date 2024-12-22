import { Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">InfyCo</h3>
            <p className="text-gray-400 mb-4">
              Empowering careers through expert mentorship and guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find Mentors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Book Sessions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Give Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
// import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TimeInfo</h3>
            <p className="text-gray-400">
              Delivering the latest and most relevant news stories from around the globe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div> */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-start text-gray-400">
          <p>© {new Date().getFullYear()} TimeInfo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
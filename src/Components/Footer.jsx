import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#E0F7FF] text-black py-12">
      <div className="mx-auto px-6">
        {/* Website Name, Copyright and Contact Info */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">TutorHive</h2>
            <p className="text-sm mt-2">© 2024 TutorHive. All Rights Reserved.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="text-sm">Email: contact@TutorHive.com</p>
            <p className="text-sm">Phone: +123-456-7890</p>
            <p className="text-sm">Address: 123 Sporty Lane, City, Country</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/Tutor" className="hover:text-white transition-colors">Tutor</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/Tutoring" className="hover:text-white transition-colors">Tutoring Info</a></li>
              <li><a href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="mt-4 flex gap-6">
              <a href="https://www.facebook.com" className="text-xl hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" className="text-xl hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-xl hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="text-xl hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg">Subscribe to Our Newsletter</h3>
            <p className="text-sm mt-2">Get the latest updates and special offers.</p>
            <form className="mt-4">
              <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-lg text-gray-800" />
              <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-blue-600 pt-6 text-center">
          <p className="text-sm">© 2024 TutorHive. All Rights Reserved. Powered by [Your Company].</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
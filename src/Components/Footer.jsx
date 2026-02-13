import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-green-300 cursor-pointer">About</li>
            <li className="mb-2 hover:text-green-300 cursor-pointer">Contact</li>
            <li className="mb-2 hover:text-green-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaInstagram className="hover:text-green-300 cursor-pointer" />
            <FaFacebookF className="hover:text-green-300 cursor-pointer" />
            <FaPinterestP className="hover:text-green-300 cursor-pointer" />
          </div>
        </div>

        {/* Branding */}
        <div className="text-center md:text-left md:flex md:flex-col md:justify-center">
          <p className="mb-2 font-bold text-lg">GreenNest</p>
          <p className="text-gray-300 text-sm">© 2025 GreenNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

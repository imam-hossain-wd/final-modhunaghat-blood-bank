const Footer = () => {
    return (
      <footer className="bg-gray-50 border-t shadow-md py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Causes</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Other Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Pages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Credits</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p>Jl. Sunset Road No.815, Kuta, Bali 80361</p>
              <p>(+62) 8152 254 239</p>
              <p><a href="mailto:contact@domain.com" className="hover:underline">contact@domain.com</a></p>
            </div>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none border"
              />
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded-r-md ">
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p>&copy; 2024. All rights reserved.</p>
            <p>Modhunaghat Blood Bank , Unity For Humanity</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
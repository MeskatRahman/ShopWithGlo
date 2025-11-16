import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@shopwithglo.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 E-commerce St, Global City, GC 12345</p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/return-policy" className="hover:underline">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media / Newsletter (Placeholder) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p>Follow us on social media or subscribe to our newsletter.</p>
            {/* Add social media icons or newsletter signup form here */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} ShopWithGlo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

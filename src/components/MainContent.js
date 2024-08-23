import React from "react";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Section 1 */}
      <div className="relative" id="home">
        <img
          src="/main.png"
          alt="Welcome"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold mb-4">
            என் சமுகம் உனக்கு முன்பாகச் செல்லும், நான் உனக்கு இளைப்பாறுதல்
            தருவேன்
          </h1>
          <h3 className="text-white text-2xl font-medium">
            யாத்திராகமம் 33:14
          </h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-900 text-white py-24" id="vision">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Our Vision</h2>
          <div className="flex justify-center space-x-24">
            {/* Church Planting */}
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-6">Church Planting</h3>
              <p className="text-lg">
                Driven by the Great Commission, we aim to plant new churches in
                unreached areas, sharing the gospel, and establishing
                communities of faith. We believe in empowering leaders,
                equipping them to spread the message of Jesus Christ, and
                establishing new congregations that continue to grow and thrive.
              </p>
            </div>
            {/* Church Growth */}
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-6">Church Growth</h3>
              <p className="text-lg">
                We are committed to nurturing a thriving, spiritually vibrant
                community where every believer can grow in their faith and walk
                with Christ. Our focus is on deepening our connection with God,
                expanding our congregation, and fostering a strong sense of
                belonging among our members.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id="services">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Most Recent Sermon</h2>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Sermon"
              className="mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="sermon-link"
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Watch Live
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">ONE CHURCH. THREE LOCATIONS</h2>
        <div className="flex justify-center space-x-16">
          <div>
            <h3 className="text-xl font-semibold mt-4">Vannarpettai</h3>
            <img
              src="https://via.placeholder.com/400x200"
              alt="The Brook"
              className="w-full object-cover"
            />
            <p className="mt-2 text-gray-600">
              Vannarpettai
              <br />
              Every Sunday 8:30 AM - 11 AM
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4">
              Thiruvengadanathapuram
            </h3>
            <img
              src="https://via.placeholder.com/400x200"
              alt="The Valley"
              className="w-full object-cover"
            />
            <p className="mt-2 text-gray-600">
              Thiruvengadanathapuram
              <br />
              Every Sunday 6:00 AM - 8:30 AM (Except first Sunday)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4">KOKKIRAKULAM</h3>
            <img
              src="https://via.placeholder.com/400x200"
              alt="Kokkirakulam"
              className="w-full object-cover"
            />
            <p className="mt-2 text-gray-600">
              Kokkirakulam
              <br />
              Every Sunday 6:30 PM - 8 PM (Except first Sunday)
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-orange-500 text-center py-16" id="about">
        <h2 className="text-3xl font-bold mb-4">Follow us on social media.</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100076057789026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.youtube.com/@cityipachurchtirunelveli8296"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
      {/* Section 6 (Footer) */}
      <div className="bg-gray-800 text-white py-8" id="contact">
        <div className="flex justify-between items-start px-8">
          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <p>N Bypass Road, Vannarpettai, Tirunelveli, Tamil Nadu 627003</p>
            <p>Phone: +91 94434 97344</p>
          </div>
          <div className="w-1/2 pl-4 text-right">
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:underline">
                  Our Ministries
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center">
          © {new Date().getFullYear()} IPA CHURCH TIRUNELVELI | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default MainContent;
